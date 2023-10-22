from rest_framework import viewsets
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.db import transaction
from .models import CurryShop, Food
from .serializers import CurryShopSerializer, FoodSerializer

# Create your views here.

class FoodViewSet(viewsets.ModelViewSet):
  serializer_class = FoodSerializer
  queryset = Food.objects.all()

  def get_queryset(self):
        queryset = Food.objects.select_related('curry_shop').all()
        return queryset

  def create(self, request, *args, **kwargs):
    # トランザクションを使用してDB操作を安全に行います
    with transaction.atomic():
        # シリアライザのインスタンスを作成
        serializer = self.get_serializer(data=request.data)

        # データのバリデーション
        serializer.is_valid(raise_exception=True)

        # バリデーションが成功した場合の処理
        self.perform_create(serializer)
        
        # Responseをクライアントに返す
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

  def perform_create(self, serializer):
      serializer.save()

class CurryShopViewSet(viewsets.ModelViewSet):
  queryset = CurryShop.objects.all()
  serializer_class = CurryShopSerializer
