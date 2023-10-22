from rest_framework import serializers
from .models import CurryShop, Food

class FoodSerializer(serializers.ModelSerializer):
  class Meta:
    model = Food
    fields = ['id', 'name', 'price', 'evaluation', 'curry_shop']

class CurryShopSerializer(serializers.ModelSerializer):
  class Meta:
    model = CurryShop
    fields = ['id', 'name', 'address']