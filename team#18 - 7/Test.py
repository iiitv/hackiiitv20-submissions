import keras.backend as K
from keras import optimizers
from keras.layers import Conv1D, SpatialDropout1D
from keras.layers import Activation, Lambda
from keras.layers import Convolution1D, Dense
from keras.models import Input, Model
import keras.layers
def channel_normalization(x):
    # Normalize by the highest activation
    max_values = K.max(K.abs(x), 2, keepdims=True) + 1e-5
    out = x / max_values
    return out


def wave_net_activation(x):
    tanh_out = Activation('tanh')(x)
    sigm_out = Activation('sigmoid')(x)
    return keras.layers.multiply([tanh_out, sigm_out])


def residual_block(x, s, i, activation, nb_filters, kernel_size):
    original_x = x
    conv = Conv1D(filters=nb_filters, kernel_size=kernel_size,
                  dilation_rate=2 ** i,padding='same',
                  name='dilated_conv_%d_tanh_s%d' % (2 ** i, s))(x)
    if activation == 'norm_relu':
        x = Activation('relu')(conv)
        x = Lambda(channel_normalization)(x)
    elif activation == 'wavenet':
        x = wave_net_activation(conv)
    else:
        x = Activation(activation)(conv)

    x = SpatialDropout1D(0.1)(x)

    # 1x1 conv.
    x = Convolution1D(nb_filters, 1, padding='same')(x)
    res_x = keras.layers.add([original_x, x])
    return res_x, x


def dilated_tcn(num_feat, num_classes, nb_filters,
                kernel_size, dilatations, nb_stacks, max_len,
                activation='wavenet', use_skip_connections=True,
                return_param_str=False, output_slice_index=None,
                regression=False):
    """
    dilation_depth : number of layers per stack
    nb_stacks : number of stacks.
    """
    input_layer = Input(name='input_layer', shape=(max_len, num_feat))
    
    aux_input = Input(name='aux_input', shape=(max_len,))
    
    x_aux = aux_input
    x_aux = Dense(max_len,activation='relu')(x_aux)
    x_aux = Dense(96,activation='relu')(x_aux)
    x = input_layer
    x_aux_initi = Dense(max_len,activation='sigmoid')(x_aux)
    x_aux_initi = Lambda(lambda tt: tf.reshape(tt,(-1,48,1)))(x_aux_initi)
    x = keras.layers.multiply([x, x_aux_initi])
    x = Convolution1D(nb_filters, kernel_size, padding='same', name='initial_conv_2')(x)
    x_aux_conv1 = Dense(384,activation='sigmoid')(x_aux)
    x_aux_conv1 = Lambda(lambda tt: tf.reshape(tt,(-1,48,8)))(x_aux_conv1)
    x = keras.layers.multiply([x, x_aux_conv1])
    
    skip_connections = []
    for s in range(nb_stacks):
        for i in dilatations:
            x, skip_out = residual_block(x, s, i, activation, nb_filters, kernel_size)
            skip_connections.append(skip_out)

    if use_skip_connections:
        x = keras.layers.add(skip_connections)
    x = Activation('relu')(x)

    if output_slice_index is not None:  # can test with 0 or -1.
        if output_slice_index == 'last':
            output_slice_index = -1
        if output_slice_index == 'first':
            output_slice_index = 0
        print('first:x.shape=', x.shape)
        x = Lambda(lambda tt: tt[:, output_slice_index, :])(x)
        
    if not regression:
        # classification
        x = Dense(num_classes)(x)
        
        x = Activation('softmax', name='output_softmax')(x)
        
        output_layer = x
        print(f'model.x = {input_layer.shape}')
        print(f'model.y = {output_layer.shape}')
        model = Model(input_layer, output_layer)

        adam = optimizers.Adam(lr=0.002, clipnorm=1.)
        model.compile(adam, loss='sparse_categorical_crossentropy', metrics=['accuracy'])
        print('Adam with norm clipping.')
    else:
        x_aux_last = Dense(nb_filters,activation='sigmoid')(x_aux)
        x = keras.layers.multiply([x, x_aux_last])
        x = Dense(1)(x)
        output_layer = Activation('linear', name='output_dense')(x)
        print(f'model.x = {input_layer.shape}')
        print(f'model.y = {output_layer.shape}')
        model = Model(inputs=[input_layer, aux_input], outputs=output_layer)
 
        adam = optimizers.Adam(lr=0.01, clipnorm=1.,decay=0.1,amsgrad=True)
        model.compile(adam, loss='mean_squared_error')

    if return_param_str:
        param_str = 'D-TCN_C{}_B{}_L{}'.format(2, nb_stacks, dilatations)
        return model, param_str
    else:
        return model



import tensorflow as tf
from tensorflow.contrib import rnn
from tensorflow.contrib import grid_rnn
import numpy as np
import pandas as pd
import random
import eleceval
import os
from sklearn import preprocessing
from tensorflow.python.ops import array_ops

import keras
import copy

predictperiod = '6h' #15m:15分钟，6h：6小时，1d：天
modeltype = 'TCN' #LSTM,GRU,pLSTM,gridLSTM

summary_dir = ""
MODEL_SAVE_PATH = ""
MODEL_NAME = "model.ckpt"

#learning_rate = 0.001
training_iters = 40001
batch_size = 2400
regularization_rate = 0.0001


n_input = 5
#用前10个数据预测下一个,第batch_size个数据，n_step个为一组，一个n_input个特征
n_steps = 48
n_hidden = 400
n_class = 1 
n_layers = 18
num_epochs=5000
data_path = ""
period_step = 24
period_day = 7
n_residents = 1
def dofile(start_point,end_point,point):
    # 20544  23112  25680-240
    X = [] ; Y = [];AUX_X = []
    for j in range(n_residents):
        df = pd.read_csv('') 
        df = df.loc[2*point-1:,['Load']]
        df = pd.DataFrame(np.array(df),columns=['Load'])
        for i in range(start_point,end_point-48,48):
            x = df.loc[i:i+n_steps-1,['Load']].values.tolist()   
        #aux_x = df_character.loc[j].tolist()  
            y = df.loc[i+n_steps,['Load']].tolist()
            X.append(x)
        #AUX_X.append(aux_x)
            Y.append(y)
    return X,Y
#The time of prediction
time = 10
print('time:',time)
#载入训练数据
xtrain,ytrain = dofile(0,19200,time)
# xtrain,aux_xtrain,ytrain = dofile(0, 800)
x_train=np.array(xtrain)
y_train=np.array(ytrain)
print(x_train.shape)

xval,yval = dofile(19200,21600,time)
x_val=np.array(xval)
y_val=np.array(yval)

xtest,ytest = dofile(21600,24000,time)
x_test=np.array(xtest)
y_test=np.array(ytest)
    
vec_out = []
vec_all = copy.copy(x_train)
num=int(len(vec_all)/n_residents)
for i in range(n_residents):
    batch_data = vec_all[i*num:(i+1)*num]
    for j in range(num):
        if j == 0:
            out = copy.copy(batch_data[0])
        else:
            out += batch_data[j]
        if j == (num-1):
            out = out/num
            vec_out.append(copy.copy(out))
vec_out = np.array(vec_out)
vec_out = pd.DataFrame(vec_out.reshape((n_residents,48)))

#Process deputy input
def doaux(start_point,end_point):
    # 20544  23112  25680-240
    AUX_X = []
    for j in range(n_residents):
        for i in range(start_point,end_point-48,48):
            aux_x = vec_out.loc[j,:]
            aux_x = np.array(aux_x).reshape((48,)).tolist()
            AUX_X.append(aux_x)
    return AUX_X

aux_xtrain = doaux(0,19200)
aux_x_train=np.array(aux_xtrain)
aux_xval = doaux(19200,21600)
aux_x_val=np.array(aux_xval)
aux_xtest = doaux(21600,24000)
aux_x_test=np.array(aux_xtest)



class PrintSomeValues(keras.callbacks.Callback):
    def on_train_begin(self, logs={}):
        self.maape_flag = 1.0
    
    
    def on_epoch_begin(self, epoch, logs={}):
        lr = K.get_value(model.optimizer.lr)
        print("current learning rate is {}".format(lr))
        pred = model.predict({'input_layer':x_test, 'aux_input':aux_x_test})
        pred = np.array(pred)
        predict_all = pred.flatten()
        truth_all = np.array(y_test)
        truth_all = truth_all.flatten()
        maape = eleceval.calcMaape(predict_all,truth_all)
        mape = eleceval.calcMAPE(predict_all,truth_all)
        mae = eleceval.calcMAE(predict_all,truth_all) 
        mse = eleceval.calcMSE(predict_all,truth_all)
        rmse = eleceval.calcRMSE(predict_all,truth_all) 
        r_2 = eleceval.r2(predict_all,truth_all)
        print("After %d training step(s),"
              "on test data MAAPE = %.4f,MAPE = %.4f,MAE = %.4f,MSE = %.4f,RMSE = %.4f,R2 = %.4f"\
              % (epoch, maape,mape,mae,mse,rmse,r_2))
        
        if maape <= self.maape_flag:
            self.maape_flag = maape
            #concatenate two arrays
            truth_all_reshape=np.reshape(truth_all,[-1,1])
            predict_all_reshape=np.reshape(predict_all,[-1,1])
            y_con = np.concatenate((truth_all_reshape, predict_all_reshape), axis=1)
            #Print true value and predicted value
            y_out = pd.DataFrame(y_con, columns=["true_data","pre_data"])
            y_out.to_csv('steps=%d-MAAPE=%.4f.csv'\
                       % (epoch, maape))

model, param_str = dilated_tcn(output_slice_index='last',
                               num_feat=x_train.shape[2],
                               num_classes=0,
                               nb_filters=8,
                               kernel_size=8,
                               dilatations=[0,1,2,3],
                               nb_stacks=1,
                               max_len=x_train.shape[1],
                               activation='norm_relu',
                               use_skip_connections=False,
                               return_param_str=True,
                               regression=True)
print(f'x_train.shape = {x_train.shape}')
print(f'y_train.shape = {y_train.shape}')
psv = PrintSomeValues()
model.summary()
reduce_lr = keras.callbacks.ReduceLROnPlateau(monitor='val_loss', factor=0.3,patience=15, mode='min')

early_stopping = keras.callbacks.EarlyStopping(monitor='val_loss', patience=50, verbose=2,mode='min')
model.fit(x = {'input_layer':x_train, 'aux_input':aux_x_train}, y=y_train, 
          validation_data=({'input_layer':x_val,'aux_input':aux_x_val},y_val),
          epochs=5000, 
          batch_size = 32,
          initial_epoch=0,
          callbacks=[early_stopping,reduce_lr, psv]
         )