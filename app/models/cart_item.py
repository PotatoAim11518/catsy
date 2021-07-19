from .db import db
from flask_login import UserMixin


class Cart_Item(db.Model, UserMixin):
    __tablename__ = 'cart_items'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey="users.id")
    cat_id = db.Column(db.Integer, ForeignKey="cats.id")
    session_id = db.Column(db.Integer, ForeignKey="adoption_sessions.id")
