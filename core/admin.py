from django.contrib import admin
from .models import *

admin.site.register(Wallet)
admin.site.register(User)
admin.site.register(Transaction)
admin.site.register(Budget)
admin.site.register(Notification)
admin.site.register(SavingGoal)