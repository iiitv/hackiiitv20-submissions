from tkinter import *
from PIL import ImageTk,Image

mainRoot = Tk()
mainRoot.title("Smart HealthCare")

my = ImageTk.PhotoImage(Image.open("a.PNG"))
label2 = Label(image = my)
label2.pack()


mainRoot.mainloop()