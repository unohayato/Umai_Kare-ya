from django.shortcuts import render
from rest_framework import viewsets
from .models import CurryShop, Food
from .serializers import CurryShopSerializer, FoodSerializer

# Create your views here.

class FoodViewSet(viewsets.ModelViewSet):
  queryset = Food.objects.all()
  serializer_class = FoodSerializer

class CurryShopViewSet(viewsets.ModelViewSet):
  queryset = CurryShop.objects.all()
  serializer_class = CurryShopSerializer
