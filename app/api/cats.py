from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Cat

cat_routes = Blueprint('cats', __name__)


@cat_routes.route('/')
def cats():
    cats = Cat.query.all()
    return {'cats': [cat.to_dict() for cat in cats]}


@cat_routes.route('/<int:id>')
def cat(id):
    cat = Cat.query.get(id)
    return cat.to_dict()
