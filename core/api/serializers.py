from rest_framework import serializers
from core.models import Wallet, Transaction, SavingGoal, Budget, Notification, User
from django.contrib.auth.password_validation import validate_password



class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=True,
        validators = [validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'password2')

    def validate(self, attrs):
        if attrs['passowrd'] != attrs['password2']:
            raise serializers.ValidationError(
            {"password": "Password fields didn't match"}
        )
        return attrs
    
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data.get('email', '')
        )
        user.set_password(validated_data['password'])
        user.save()
        return user



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

    