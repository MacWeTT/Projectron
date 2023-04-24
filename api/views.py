from rest_framework import response
from rest_framework.decorators import api_view
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        ''
    ]
    return response(routes)