from .db import db
from flask_login import UserMixin


class Adoption_Session(db.Model, UserMixin):
    __tablename__ = 'adoption_sessions'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey="users.id")
