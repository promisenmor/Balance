from django.urls import path, include
from .import views
from .api import api_views
from .api.api_views import RegisterView, LoginView, LogoutView
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'wallet', api_views.WalletViewSet)
router.register(r'transactions', api_views.TransactionViewSet)
router.register(r'saving_goals', api_views.SavingGoalViewSet)


urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('overview/', views.overview, name='overview'),
    path('transactions/', views.transactions, name='transactions'),
    path('saving_goals/', views.saving_goals, name='saving_goals'),
    path('advisor/', views.advisor, name='advisor'),

    path('register/', RegisterView.as_view(), name='auth_register'),
    path('login/', LoginView.as_view(), name='auth_login'),
    path('logout/', LogoutView.as_view(), name='auth_logout'),

    path('api/', include(router.urls)),
]