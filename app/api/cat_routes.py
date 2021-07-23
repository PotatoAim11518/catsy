from flask import Blueprint
from app.models import Cat
# from flask_login import login_required

cat_routes = Blueprint('cats', __name__)


@cat_routes.route('')
def cats():
    cats = Cat.query.all()
    return {'cats': [cat.to_dict() for cat in cats]}


@cat_routes.route('/<int:id>', methods=["GET", "PATCH"])
def cat(id, **payload):
    cat = Cat.query.get(id)
    cat_dict = cat.to_dict()
    for attr, val in payload.items():
        cat_dict[attr] = val
    return cat_dict
