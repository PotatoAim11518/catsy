from .db import db
from flask_login import UserMixin


class Size(db.Model, UserMixin):
    __tablename__ = 'sizes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
