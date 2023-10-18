from django.db import models
import datetime

from django.db.models.query import QuerySet

# Create your models here.


class SoftDeletionManager(models.Manager):
  def get_queryset(self):
    return super().get_queryset().filter(deleted_at__is_null = True)

class SoftDeletionModel(models.Model):
  created_at = models.DateTimeField(verbose_name="作成日時", auto_now_add=True)
  updated_at = models.DateTimeField(verbose_name="更新日時", auto_now=True)
  deleted_at = models.DateField(verbose_name="削除日時", blank=True, null=True)
  
  class Meta:
    abstract = True
    
  def delete(self):
    self.deleted_at = datetime.datetime.now()
    self.save()
    
  def hard_delete(self):
    super().delete()
  

class Food(SoftDeletionModel):
  EVALUATION = (
            (0, "うまい!"),
            (1, "うま!"),
            (2, "うっま!"),
            (3, "うまっ!"),
            (4, "うまーい!"),
            (5, "うまー!"),
  )
  name = models.CharField(verbose_name="メニュー名", max_length=255)
  price = models.IntegerField(verbose_name="金額")
  evaluation = models.IntegerField(verbose_name="評価", choices=EVALUATION)
  
  objects = SoftDeletionManager

  def __str__(self):
    return self.name

class CurryShop(SoftDeletionModel):
  name = models.CharField(verbose_name="店名", max_length=255)
  address = models.CharField(verbose_name="場所", max_length=255)
  foods = models.ForeignKey(Food, verbose_name="食べたもの", on_delete=models.CASCADE)
  
  objects = SoftDeletionManager
  
  def __str__(self):
    return self.name
