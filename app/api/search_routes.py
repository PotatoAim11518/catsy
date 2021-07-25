from flask import Blueprint, jsonify, request
from app.models import Age, Breed, Coat, Size, Gender, Cat


search_routes = Blueprint('search', __name__)

@search_routes.route('/')
def search():
  pass