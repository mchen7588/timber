from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from posts.views import PostView
from trees.views import tree_list

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls),

    path('api/posts/', PostView.as_view(), name='posts'),
    path('api/trees/', tree_list, name='trees'),

    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]