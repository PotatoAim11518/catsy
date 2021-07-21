from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Age, Gender, Size, Coat, Breed

categories_routes = Blueprint('categories', __name__)

@categories_routes.route('/ages')
@login_required
def ages():
    ages = Age.query.all()
    return {'ages': [age.to_dict() for age in ages]}


@categories_routes.route('/genders')
@login_required
def genders():
    genders = Gender.query.all()
    return {'genders': [gender.to_dict() for gender in genders]}


@categories_routes.route('/sizes')
@login_required
def sizes():
    sizes = Size.query.all()
    return {'sizes': [size.to_dict() for size in sizes]}


@categories_routes.route('/coats')
@login_required
def coats():
    coats = Coat.query.all()
    return {'coats': [coat.to_dict() for coat in coats]}


@categories_routes.route('/breeds')
@login_required
def breeds():
    breeds = Breed.query.all()
    return {'breeds': [breed.to_dict() for breed in breeds]}