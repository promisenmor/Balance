from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout as auth_logout


def login_view(request):
    if request.user.is_authenticated:
        return redirect('dashboard')
    return render(request, 'login.html')


def register_view(request):
    if request.user.is_authenticated:
        return redirect(dashboard)
    return render(request, 'register.html')

def logout_view(request):
    auth_logout(request)
    return redirect('login')




@login_required
def dashboard(request):
    return render(request, 'dashboard.html', {'user': request.user})


@login_required
def transactions(request):
    return render(request, 'transactions.html', {'user': request.user})


@login_required
def saving_goals(request):
    return render(request, 'saving_goals.html', {'user': request.user})


@login_required
def advisor(request):
    return render(request, 'advisor.html', {'user': request.user})



@login_required
def overview(request):
    return render(request, 'overview.html', {'user': request.user})







