from flask import Blueprint
from flask_login.utils import login_required
from app.models import Cat
from flask_login import login_required

cat_routes = Blueprint('cats', __name__)


@cat_routes.route('')
def cats():
    cats = Cat.query.all()
    return {'cats': [cat.to_dict() for cat in cats]}


@cat_routes.route('/<int:id>')
def cat(id):
    cat = Cat.query.get(id)
    return cat.to_dict()

# CONTINUE HERE>>>>>>>.
@cat_routes.route('/<int:id>', methods=["PATCH"])
@login_required
def catUpdate(id, **payload):
    cat = Cat.query.get(id)
    cat_dict = cat.to_dict()
    for attr, val in payload.items():
        cat_dict[attr] = val
    return cat_dict
