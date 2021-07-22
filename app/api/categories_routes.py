from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Age, Gender, Size, Coat, Breed

categories_routes = Blueprint('categories', __name__)

@categories_routes.route('/ages')
def ages():
    print("Here")
    ages = Age.query.all()
    return {'ages': [age.to_dict() for age in ages]}


@categories_routes.route('/genders')
def genders():
    genders = Gender.query.all()
    return {'genders': [gender.to_dict() for gender in genders]}


@categories_routes.route('/sizes')
def sizes():
    sizes = Size.query.all()
    return {'sizes': [size.to_dict() for size in sizes]}


@categories_routes.route('/coats')
def coats():
    coats = Coat.query.all()
    return {'coats': [coat.to_dict() for coat in coats]}


@categories_routes.route('/breeds')
def breeds():
    breeds = Breed.query.all()
    return {'breeds': [breed.to_dict() for breed in breeds]}