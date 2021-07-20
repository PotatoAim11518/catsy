from werkzeug.wrappers import request
from app.models.cat import Cat
from flask import Blueprint
from sqlalchemy.orm import session
from app.models import db, Adoption_Session, Cart_Item
from flask_login import current_user, login_required

cart = Blueprint('cart', __name__, url_prefix='/cart')
items = Blueprint('items', __name__, url_prefix='/items')
cart.register_blueprint(items)


@cart.route('/', methods=["GET", "POST"])
@login_required
def getMyCart():
    print("CURRENT USER: ", current_user)
    current_user_id = current_user.user_id
    cart = Adoption_Session.query.filter(Adoption_Session.user_id == current_user_id).first()
    if cart:
        return dict(cart)
    else:
        user_cart = Adoption_Session(user_id=current_user_id)
        db.session.add(user_cart)
        db.session.commit()
        return dict(user_cart)


@cart.route('/empty', methods=["DELETE"])
@login_required
def emptyCart():
    current_user_id = current_user.user_id
    cart = Adoption_Session.query.filter(Adoption_Session.user_id == current_user_id).first()
    if cart:
        db.session.delete(cart)
        db.session.commit()
        return dict(cart)


@items.route('/<int:id>')
@login_required
def getMyCartItem():
    current_user_id = current_user.user_id
    item = Cart_Item.query.filter(Cart_Item.id == {id} and Cart_Item.user_id == current_user_id).first()
    return dict(item)

@items.route('/add', methods=["POST"])
@login_required
def addCartItem():
    current_user_id = current_user.user_id
    cart_item_id = request.cart_item.id
    session_id = Adoption_Session.query.filter(Adoption_Session.user_id == current_user_id).first().session_id
    item = Cart_Item(
        user_id=current_user_id,
        cart_item_id=cart_item_id,
        session_id=session_id
    )
    db.session.add(item)
    db.session.commit()
    return dict(item)


@items.route('/remove', methods=["DELETE"])
@login_required
def removeCartItem():
    current_user_id = current_user.user_id
    cart_item_id = request.cart_item.id
    item = Cart_Item.query.filter(Cart_Item.id == cart_item_id).first()
    if current_user_id == item.user_id:
        db.session.remove(item)
        db.session.commit()
