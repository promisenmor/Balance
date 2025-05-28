from django.shortcuts import render
from django.contrib.auth.decorators import login_required


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







