import cv2
import numpy as np

nutri = {
    0:["Per 100g serving","130 Calories","28.7g Carbohydrates","0.2g Fat","2.36g Protein"],
    2:["Per 100g serving","140 Calories","6.36g Protein","19.3g Carbohydrate","3.93g Fat"],
    3:["For regular size Apple","95 Calories","1g Protein","25g Carbohydrate","Fibre ","Vitamin C"],
    1:["For regular size Orange","47 Calories","0.9g Protein","11.8g Carbohydrate","2.4 Fibre","Vitamin C","Vitamin B1"],
    4:["For regular size Banana","89 Calories","1.1g Protein","22.8g Carbohydrate","2.6 Fibre","Potassium","Vitamin B6","Vitamin C"]
}

def scan_item():
    net = cv2.dnn.readNet('yolov3.weights', 'yolov3.cfg')
    classes=[]
    with open("coco.txt", "r") as f:
        classes = f.read().splitlines()

    cap = cv2.VideoCapture(0)
    font = cv2.FONT_HERSHEY_PLAIN
    colors = np.random.uniform(0, 255, size=(100, 3))

    while True:
        _, img = cap.read()
        height, width, _ = img.shape

        blob = cv2.dnn.blobFromImage(img, 1/255, (416, 416), (0,0,0), swapRB=True, crop=False)
        net.setInput(blob)
        output_layers_names = net.getUnconnectedOutLayersNames()
        layerOutputs = net.forward(output_layers_names)

        boxes = []
        confidences = []
        ids = []

        for output in layerOutputs:
            for det in output:
                scores = det[5:]
                id = np.argmax(scores)
                confidence = scores[id]
                if confidence > 0.2:
                    mid_x = int(det[0]*width)
                    mid_y = int(det[1]*height)
                    w = int(det[2]*width)
                    h = int(det[3]*height)

                    x = int(mid_x - w/2)
                    y = int(mid_y - h/2)

                    boxes.append([x, y, w, h])
                    confidences.append((float(confidence)))
                    ids.append(id)

        ind = cv2.dnn.NMSBoxes(boxes, confidences, 0.2, 0.4)
        dict = {0:['o1','o2','o3'],1:["n1","n2","n3"],2:['m1','m2','m3'],3:['k1','k2','k3'],4:['z1','z2','z3']}
        if len(ind)>0:
            for i in ind.flatten():
                x, y, w, h = boxes[i]
                label = str(classes[ids[i]])
                confidence = str(round(confidences[i],2))
                color = colors[i]
                cv2.rectangle(img, (x,y), (x+w, y+h), color, 2)
                cv2.putText(img, label + " " + confidence, (x, y+20), font, 2, (255,255,255), 2)
                nutrients = nutri[ids[i]]
                j=0
                for i in nutrients:
                    j+=30
                    cv2.putText(img,i,(x,y+20+j),font,2,(255,255,255),2)

        cv2.imshow('Image', img)
        key = cv2.waitKey(1)
        if key==27:
            break
    
    cap.release()
    cv2.destroyAllWindows()
