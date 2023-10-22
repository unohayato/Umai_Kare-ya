from rest_framework import serializers
from .models import CurryShop, Food

class FoodSerializer(serializers.ModelSerializer):
  evaluation_display = serializers.CharField(source='get_evaluation_display', read_only=True)
  curry_shop_name = serializers.CharField(source='curry_shop.name', read_only=True)

  class Meta:
      model = Food
      fields = ['id', 'name', 'price', 'evaluation', 'evaluation_display', 'curry_shop', 'curry_shop_name']

class CurryShopSerializer(serializers.ModelSerializer):
  class Meta:
    model = CurryShop
    fields = ['id', 'name', 'address']