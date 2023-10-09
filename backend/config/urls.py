from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from app import views

router = routers.SimpleRouter()
router.register('foods', views.FoodViewSet)
router.register('curry_shops', views.CurryShopViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
]
