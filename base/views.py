from django.shortcuts import render
from post.models import Post


def home(request):
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, 'base/home.html', context)

def about(request):
    return render(request, 'base/about.html')