from typing import NamedTuple
from flask import Blueprint, request
from flask_login.utils import login_required
from app.models import db, Cat
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


@cat_routes.route('/<int:id>', methods=["PATCH"])
@login_required
def catUpdate(id):
    req = request.get_json()
    cat = Cat.query.filter(Cat.id == id).update(req, synchronize_session=False)
    db.session.commit()
    return cat.to_dict()
