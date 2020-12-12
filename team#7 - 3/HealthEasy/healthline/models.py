from django.db import models


class Docter(models.Model):
    docter_name = models.CharField(max_length=100)
    docter_type = models.CharField(max_length=100)
   
    doctor_exp = models.IntegerField(default=0)
    # docter_image = models.ImageField(default='None',upload_to='images/')

    def __str__(self):
        return self.docter_name

class Patient(models.Model):
    patient_name = models.CharField(max_length=100)
    patient_disease = models.CharField(max_length=100)
    patient_photo = models.ImageField(default='None',upload_to='images/')
    patient = models.CharField(max_length=100)


    def __str__(self):
        return '%s %s %s' % (self.patient_name,self.patient_disease)
