from rest_framework import serializers
from core.models import Wallet, Transaction, SavingGoal, Budget, Notification

class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields ='__all__'


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

class SavingGoalSerializer(serializers.ModelSerializer):
    progress = serializers.SerializerMethodField()

    def get_progress(self, obj):
        return obj.progress
    

    class Meta:
        model = SavingGoal
        fields = '__all__'


class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = '__all__'


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'

    