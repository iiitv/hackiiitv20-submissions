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

# mainImage = ImageTk.PhotoImage(Image.open("a.jpg"))
# labelImg = Label(frame1, image = mainImage)
# labelImg.pack()


# first feature - for checking the stock

def store(entry1, entry2, entry3, entry4):
    newWin = Tk()

    inlabel1 = Label(newWin, text = "Deficency 1:  " +  str(entry1))
    inlabel1.config(font = (60))
    inlabel1.pack()

    inlabel2 = Label(newWin, text = "Deficency 2:   " + str(entry2))
    inlabel2.config(font = (60))
    inlabel2.pack()

    inlabel3 = Label(newWin, text = "Deficency 3:   " + str(entry3))
    inlabel3.config(font = (60))
    inlabel3.pack()

    inlabel4 = Label(newWin, text = "Deficency 4:   " + str(entry4))
    inlabel4.config(font = (60))
    inlabel4.pack()

    newWin.geometry("500x500")
        

def checkStore():
    storeFrame = Tk();

    inframe1 = LabelFrame(storeFrame, text = "Deficiency 1", padx = 30, pady = 30)
    entry1 = Entry(inframe1, width = 30)
    entry1.pack()
    inframe1.pack()

    inframe2 = LabelFrame(storeFrame, text = "Deficiency 2", padx = 30, pady = 30)
    entry2 = Entry(inframe2, width = 30)
    entry2.pack()
    inframe2.pack()
    
    inframe3 = LabelFrame(storeFrame, text = "Deficiency 3", padx = 30, pady = 30)
    entry3 = Entry(inframe3, width = 30)
    entry3.pack()
    inframe3.pack()

    inframe4 = LabelFrame(storeFrame, text = "Deficiency 4", padx = 30, pady = 30)
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




# for the main detection feature

# def showMain():


# second feature - for trying out the ML thing 
frame3 = LabelFrame(mainFrame, text = "Check out the main function", padx = 100, pady = 30)
but2 = Button(frame3, text = "Main Feature", padx = "20",command = scan_item)
but2.pack()
frame3.pack()


mainFrame.geometry("700x700")
mainFrame.mainloop()