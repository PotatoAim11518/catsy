from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import User_Comments
from app.forms import PostReview

reviews_routes = Blueprint('reviews', __name__)


@reviews_routes.route('/cat/reviews/<int:id>', methods=['GET'])
def reviews(id):
    reviews = User_Comments.query.all()
    return {review.id:review.to_dict for review in reviews}


@reviews_routes.route('/cat/reviews/<int:id>', methods=['POST'])
@login_required
def post_review():
    form = PostReview()
    if form.validate_on_submit():
        review = User_Comments(
            user_id=session['user_id'],
            product_id=request.form['product_id'],
            comment=request.form['comment']
        )
        review.save()
        return jsonify({'message': 'Review posted successfully'})
    return jsonify({'message': 'Review not posted'})
