from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

class PostView(APIView):
    def get(self, request, *args, **kwargs):
        return Response({
            "test": "yay"
        })


# Create your views here.
