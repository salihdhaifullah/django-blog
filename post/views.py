from django.shortcuts import render, redirect, get_object_or_404
from .forms import CommentForm
from .models import Categories, Post

def detail(request, category_slug, slug):
    post = get_object_or_404(Post, slug=slug)
    form = CommentForm()
    
    if request.method == 'POST':
        form = CommentForm(request.POST)

    if form.is_valid():
        comment = form.save(commit=False)
        comment.post = post
        comment.save()
        return redirect('post_detail', slug=slug)
    else:
        form = CommentForm()
    
    context = {'post': post, 'form': form}
    return render(request, 'post/detail.html', context)

def category(request, slug):
    category = get_object_or_404(Categories, slug=slug)
    posts = Post.objects.filter(category=category)
    context = {'category': category, 'posts': posts}
    return render(request, 'post/category.html', context)
