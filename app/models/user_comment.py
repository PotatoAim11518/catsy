from sqlalchemy.orm import relationship
from .db import db
from flask_login import UserMixin


class User_Comment(db.Model, UserMixin):
    __tablename__ = 'user_comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    cat_id = db.Column(db.Integer, db.ForeignKey("cats.id"), nullable=False)
    comment = db.Column(db.String(500), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=db.func.now(), onupdate=db.func.now())

    user = relationship("User", back_populates="comment")
    cat = relationship("Cat", back_populates="comment")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'cat_id': self.cat_id,
            'comment': self.comment,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
