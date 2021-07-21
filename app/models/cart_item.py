from sqlalchemy.orm import relationship
from .db import db
from flask_login import UserMixin


class Cart_Item(db.Model, UserMixin):
    __tablename__ = 'cart_items'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    cat_id = db.Column(db.Integer, db.ForeignKey("cats.id"), nullable=False)
    session_id = db.Column(db.Integer, db.ForeignKey("adoption_sessions.id"), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=db.func.now(), onupdate=db.func.now())

    user = relationship("User", back_populates="cart_items")
    cat = relationship("Cat", back_populates="cart_entry")

    cart = relationship("Adoption_Session", back_populates="cart_items")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'cat_id': self.cat_id,
            'session_id': self.session_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'cat': self.cat.to_dict(),
            'user': self.user.to_dict()
        }
