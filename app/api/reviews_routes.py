from flask import Blueprint, jsonify, session, request

reviews_routes = Blueprint('reviews', __name__)

@reviews_routes.route('/reviews/<int:review_id>', methods=['GET'])

