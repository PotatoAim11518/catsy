from .db import db
from flask_login import UserMixin


class Gender(db.Model, UserMixin):
    __tablename__ = 'genders'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(10), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
