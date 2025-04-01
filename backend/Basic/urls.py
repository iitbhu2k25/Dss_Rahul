from django.urls import path
from .views import Locations_stateAPI,Locations_districtAPI,Locations_subdistrictAPI,Locations_villageAPI,Time_series,SewageCalculation,WaterSupplyCalculationAPI
urlpatterns = [
    path("",Locations_stateAPI.as_view(),name="states"),
    path("district/",Locations_districtAPI.as_view(),name="districts"),
    path("subdistrict/",Locations_subdistrictAPI.as_view(),name="subdistricts"),
    path("village/",Locations_villageAPI.as_view(),name="villages"),
    path("time_series/arthemitic/",Time_series.as_view(),name="time_series"),
    path("sewage_calculation/",SewageCalculation.as_view(), name="sewage_calculation"),
    path("sewage_calculation/total_population/",SewageCalculation.as_view(), name="total_population"),
    path("water_supply/", WaterSupplyCalculationAPI.as_view(), name="water_supply"),
]