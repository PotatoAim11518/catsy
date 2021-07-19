from sqlalchemy.orm import backref, relationship
from .db import db
from flask_login import UserMixin


class Cat(db.Model, UserMixin):
    __tablename__ = 'cats'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(2000))
    image_url = db.Column(db.String(2000), nullable=False)
    age_id = db.Column(db.Integer, db.ForeignKey("ages.id"))
    breed_id = db.Column(db.Integer, db.ForeignKey("breeds.id"))
    gender_id = db.Column(db.Integer, db.ForeignKey("genders.id"))
    size_id = db.Column(db.Integer, db.ForeignKey("sizes.id"))
    coat_id = db.Column(db.Integer, db.ForeignKey("coats.id"))
    contact_city = db.Column(db.String(50))
    contact_state = db.Column(db.String(2))
    spayed_neutered = db.Column(db.Boolean(create_constraint=False))
    adopted = db.Column(db.Boolean(create_constraint=False))
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())

    age = relationship("Age")
    breed = relationship("Breed")
    gender = relationship("Gender")
    size = relationship("Size")
    coat = relationship("Coat")

    owner = relationship("User", back_populates="cats")
    comment = relationship("User_Comment", back_populates="cat")
    cart_entry = relationship("Cart_Item", back_populates="cat")
