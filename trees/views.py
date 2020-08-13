from django.shortcuts import render
from rest_framework.response import Response

from django.http import JsonResponse

import pandas as pd
from sodapy import Socrata

# Create your views here.
def tree_list(request):
    print('###########################')
    name_common = request.GET.get('name_common')
    tree_id = request.GET.get('tree_id')

    client = Socrata("data.smgov.net", None)
    results = client.get("w8ue-6cnd", limit=5, tree_id=tree_id, name_common=name_common)

    results_df = pd.DataFrame.from_records(results)
    print('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    # print(results_df)
    print(results)

    return JsonResponse(results, safe=False)

