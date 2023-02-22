from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class AccountsAPIListView(APIView):
  def get(self, request):
    base_url = request.build_absolute_uri()
    context = {
      "1": base_url + "auth/",
      "2": base_url + "auth/",
      "3": base_url + "auth/users",
      "3": base_url + "auth/users/me/",
      "5": base_url + "auth/users/reset_password/",
      "4": base_url + "auth/users/reset_password_confirm/",
      "6": base_url + "auth/jwt/create/",
      "7": base_url + "auth/jwt/refresh/",
      "8": base_url + "auth/jwt/verify/",
    }
    return Response(context, status=status.HTTP_200_OK)