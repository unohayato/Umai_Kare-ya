from django.db import models
import datetime
  

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
