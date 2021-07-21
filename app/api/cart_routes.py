from werkzeug.wrappers import request
from app.models.cat import Cat
from flask import Blueprint
from sqlalchemy.orm import session
from app.models import db, User, Adoption_Session, Cart_Item
from flask_login import current_user, login_required

cart_routes = Blueprint('cart', __name__)
items = Blueprint('items', __name__, url_prefix='/items')
cart_routes.register_blueprint(items)


@cart_routes.route('', methods=["GET", "POST"])
@login_required
def getMyCart():
    cart = Adoption_Session.query.filter(Adoption_Session.user_id == current_user.id).first()

    if cart:
        return cart.to_dict()
    else:
        user_cart = Adoption_Session(user_id=current_user.id)
        db.session.add(user_cart)
        db.session.commit()
        return user_cart.to_dict()


@cart_routes.route('/empty', methods=["DELETE"])
@login_required
def emptyCart():
    cart = Adoption_Session.query.filter(Adoption_Session.user_id == current_user.id).first()
    if cart:
        db.session.delete(cart)
        db.session.commit()
        return cart.to_dict()


@items.route('/<int:id>')
@login_required
def getMyCartItem(id):
    item = Cart_Item.query.filter(Cart_Item.id == {id}, Cart_Item.user_id == current_user.id).first()
    return {"items": item.to_dict()}


@items.route('')
@login_required
def getMyCartItems():
    items = Cart_Item.query.options(db.joinedload('cat')).filter(Cart_Item.user_id == current_user.id).all()
    return {"items": [item.to_dict() for item in items]}


@items.route('/add', methods=["POST"])
@login_required
def addCartItem(cat_id):
    cart = Adoption_Session.query.filter(Adoption_Session.user_id == current_user.id).first()
    session_id = cart.to_dict()['session_id']
    cart_item = Cart_Item.query.filter(Cart_Item.user_id == current_user.id, Cart_Item.cat_id == cat_id).first()

    if not cart_item:
        new_cart_item = Cart_Item(
            user_id=current_user.id,
            cat_id=cat_id,
            session_id=session_id
        )
        db.session.add(new_cart_item)
        db.session.commit()
        return new_cart_item.to_dict()
    else:
        return {'message': 'Cat already in box'}


@items.route('/remove', methods=["DELETE"])
@login_required
def removeCartItem(item_id):
    del_item = Cart_Item.query.filter(Cart_Item.id == item_id, Cart_Item.user_id == current_user.id).first()
    db.session.delete(del_item)
    db.session.commit()
    return del_item.to_dict()
