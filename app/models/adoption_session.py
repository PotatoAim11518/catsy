from sqlalchemy.orm import relationship
from .db import db
from flask_login import UserMixin


class Adoption_Session(db.Model, UserMixin):
    __tablename__ = 'adoption_sessions'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=db.func.now(), onupdate=db.func.now())

    cart_items = relationship("Cart_Item", back_populates="cart", cascade="all, delete-orphan")

    def to_dict(self):
            return {
                'id': self.id,
                'user_id': self.user_id,
                'created_at': self.created_at,
                'updated_at': self.updated_at
            }
