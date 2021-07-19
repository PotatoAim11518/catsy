from .db import db
from flask_login import UserMixin


class User_Comment(db.Model, UserMixin):
    __tablename__ = 'user_comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey="users.id")
    cat_id = db.Column(db.Integer, ForeignKey="cats.id")
    comment = db.Column(db.String(500), nullable=False)
