from sqlalchemy.orm import backref, relationship
from .db import db
from flask_login import UserMixin


class Cat(db.Model, UserMixin):
    __tablename__ = 'cats'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(2000))
    image_url = db.Column(db.String(2000))
    age_id = db.Column(db.Integer, db.ForeignKey("ages.id"))
    breed_id = db.Column(db.Integer, db.ForeignKey("breeds.id"))
    gender_id = db.Column(db.Integer, db.ForeignKey("genders.id"))
    size_id = db.Column(db.Integer, db.ForeignKey("sizes.id"))
    coat_id = db.Column(db.Integer, db.ForeignKey("coats.id"))
    contact_city = db.Column(db.String(50))
    contact_state = db.Column(db.String(2))
    spayed_neutered = db.Column(db.Boolean(create_constraint=False))
    adopted = db.Column(db.Boolean(create_constraint=False))
    created_at = db.Column(db.DateTime, nullable=False, default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=db.func.now(), onupdate=db.func.now())

    age = relationship("Age")
    breed = relationship("Breed")
    gender = relationship("Gender")
    size = relationship("Size")
    coat = relationship("Coat")

    owner = relationship("User", back_populates="cats")
    comment = relationship("User_Comment", back_populates="cat")
    cart_entry = relationship("Cart_Item", back_populates="cat")

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'description': self.description,
            'image_url': self.image_url,
            'age_id': self.age_id,
            'breed_id': self.breed_id,
            'gender_id': self.gender_id,
            'size_id': self.size_id,
            'coat_id': self.coat_id,
            'contact_city': self.contact_city,
            'contact_state': self.contact_state,
            'spayed_neutered': self.spayed_neutered,
            'adopted': self.adopted,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
