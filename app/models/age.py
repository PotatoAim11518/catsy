from sqlalchemy.orm import relationship
from .db import db
from flask_login import UserMixin


class Age(db.Model, UserMixin):
    __tablename__ = 'ages'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=db.func.now(), onupdate=db.func.now())