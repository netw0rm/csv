from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
import csv, os
# Create your views here.

def index(request):
	return HttpResponse('hello')

def check(request):
	return HttpResponse('check')

def fill(request):
	return HttpResponse('fill')

def download(request):
	return HttpResponse('download')