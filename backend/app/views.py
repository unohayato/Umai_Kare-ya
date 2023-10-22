from django.shortcuts import render
from rest_framework import viewsets
from .models import CurryShop, Food
from .serializers import CurryShopSerializer, FoodSerializer

# Create your views here.

class FoodViewSet(viewsets.ModelViewSet):
  serializer_class = FoodSerializer
  def get_queryset(self):
        queryset = Food.objects.select_related('curry_shop').all()
        return queryset

class CurryShopViewSet(viewsets.ModelViewSet):
  queryset = CurryShop.objects.all()
  serializer_class = CurryShopSerializer
