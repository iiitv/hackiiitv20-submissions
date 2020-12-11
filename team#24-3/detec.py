from tkinter import *
from PIL import ImageTk,Image
from tkinter import messagebox
import cv2
import numpy as np
from food_detect import *

# Main frame of the UI
mainFrame = Tk()

# creating a new frame for storing the img
frame1 = LabelFrame(mainFrame, text = "HealthCare", padx = 30, pady = 30)
frame1.pack()

# mainImage = ImageTk.PhotoImage(Image.open("a.PNG"))
# labelImg = Label(frame1, image = mainImage)
# labelImg.pack()

# this function is for finding the deficients(if it is even a word)...

def get_key(val):
    for key, value in Def1.items():
         if val == value:
             return key

Def1 = {
        1 : ['poorvision'],
        2: ['lowernergy'],
        3: ['scurvy', 'bleedinggums'],
        4: ['softbones', 'bentbones'],
        5: ['swollenneck'],
        6: ['weakness']
    }

Def2 = {
        1: "Vitamin A",
        2: "Vitamin B1",
        3: "Vitamin C",
        4: "Vitamin D",
        5: "Iodine", 
        6: "Iron"
    }

Def3 = {
    "Vitamin A": ["Apple","Ball","Balls"],
    "Vitamin B":["Apple","Ball","Balls"],
    "Vitamin C":["Apple","Ball","Balls"],
    "Vitamin D":["Apple","Ball","Balls"],
    "Iodine":["Apple","Ball","Balls"],
    "Iron":["Apple","Ball","Balls"]
}
def print_def(out):
    newWin = Tk()
    inframe7 = LabelFrame(newWin, text = "Summary", padx = 30, pady = 30)

    for i in out:
        label1 = Label(inframe7, text = "Deficiency :"+str(i)+"\n1."+str(Def3[str(i)][0])+"\n2."+str(Def3[str(i)][1])+"\n3."+str(Def3[str(i)][2]))
        label1.config(font = (60))
        label1.pack()
    inframe7.pack()
    newWin.geometry("500x500")


def findDef(str1, str2, str3, str4):
    # predefined deficiencies...
    inputList = [str1, str2, str3, str4]
    outputList = []
    count1 = 0
    for i in range(len(inputList)):
        for val1 in Def1.values():
            for j in val1:
                if inputList[i] == j:
                    k = get_key(val1)
                    outputList.append(Def2[k])
    return outputList

def store(entry1, entry2, entry3, entry4):
    newWin = Tk()
    inframe6 = LabelFrame(newWin, text = "Summary", padx = 30, pady = 30)

    inlabel1 = Label(inframe6, text = "Symptom 1:  " +  str(entry1))
    inlabel1.config(font = (60))
    inlabel1.pack()

    inlabel2 = Label(inframe6, text = "Symptom 2:   " + str(entry2))
    inlabel2.config(font = (60))
    inlabel2.pack()

    inlabel3 = Label(inframe6, text = "Symptom 3:   " + str(entry3))
    inlabel3.config(font = (60))
    inlabel3.pack()

    inlabel4 = Label(inframe6, text = "Symptom 4:   " + str(entry4))
    inlabel4.config(font = (60))
    inlabel4.pack()

    out = findDef("".join(entry1.lower().split()), "".join(entry2.lower().split()), "".join(entry3.lower().split()), "".join(entry4.lower().split()))
    inframe6.pack()
    newWin.geometry("500x500")
    print_def(out)
        

def checkStore():
    storeFrame = Tk();

    inframe0 = LabelFrame(storeFrame, text = "References for the defficiency input", padx = 10, pady = 20)

    labelZ = Label(inframe0, text = "This are some of the symptoms which you may experience, always consult a specialist!")
    labelZ.grid(row = 0, column = 0, columnspan = 3)
    
    labelA = Label(inframe0, text = "Poor vision")
    labelA.grid(row = 1, column = 0)
    labelB = Label(inframe0, text = "Low energy")
    labelB.grid(row = 1, column = 1)
    labelC = Label(inframe0, text = "Soft bones")
    labelC.grid(row = 1, column = 2)
    labelD = Label(inframe0, text = "Weakness")
    labelD.grid(row = 1, column = 3)
    labelE = Label(inframe0, text = "Bent bones")
    labelE.grid(row = 2, column = 0)
    labelF = Label(inframe0, text = "Bleeding gums")
    labelF.grid(row = 2, column = 1)
    labelG = Label(inframe0, text = "Swollen neck")
    labelG.grid(row = 2, column = 2)
    labelH = Label(inframe0, text = "Scurvy")
    labelH.grid(row = 2, column = 3)
    inframe0.pack()

    inframe1 = LabelFrame(storeFrame, text = "Symptom 1", padx = 30, pady = 30)
    entry1 = Entry(inframe1, width = 30)
    entry1.pack()
    inframe1.pack()

    inframe2 = LabelFrame(storeFrame, text = "Symptom 2", padx = 30, pady = 30)
    entry2 = Entry(inframe2, width = 30)
    entry2.pack()
    inframe2.pack()
    
    inframe3 = LabelFrame(storeFrame, text = "Symptom 3", padx = 30, pady = 30)
    entry3 = Entry(inframe3, width = 30)
    entry3.pack()
    inframe3.pack()
    
    inframe4 = LabelFrame(storeFrame, text = "Symptom 4", padx = 30, pady = 30)
    entry4 = Entry(inframe4, width = 30)
    entry4.pack()
    inframe4.pack()

    inframe5 = LabelFrame(storeFrame, text = "Proceed for results", padx = 50, pady = 25)
    but3 = Button(inframe5, text = "Submit", command = lambda:store(entry1.get(), entry2.get(), entry3.get(), entry4.get()))
    but3.config(width = 20, height = 2, font = (30))
    but3.pack()
    inframe5.pack()

    storeFrame.geometry("700x700")
    storeFrame.mainloop

frame2 = LabelFrame(mainFrame, text = "Check Deficiency and suggestions", padx = 100, pady = 30)
but1 = Button(frame2, text = "CheckUp", padx = "35", command = checkStore)
but1.pack()
frame2.pack()

# second feature - for trying out the ML thing 
frame3 = LabelFrame(mainFrame, text = "Check out the main function", padx = 100, pady = 30)
but2 = Button(frame3, text = "Main Feature", padx = "20",command=scan_item)
but2.pack()
frame3.pack()


mainFrame.geometry("700x700")
mainFrame.mainloop()