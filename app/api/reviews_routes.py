from flask import Blueprint, jsonify, session, request
from app.models import User_Comments

reviews_routes = Blueprint('reviews', __name__)

@reviews_routes.route('/cat/reviews/<int:id>', methods=['GET'])
def reviews(id):
    reviews = User_Comments.query.all()
    return reviews.to_dict()
