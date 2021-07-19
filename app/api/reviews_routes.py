from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import User_Comments
from app.forms import PostReview

reviews_routes = Blueprint('reviews', __name__, url_prefix='/reviews')


@reviews_routes.route('/', methods=['GET'])
def reviews(id):
    reviews = User_Comments.query.all()
    return {review.id:review.to_dict for review in reviews}


@reviews_routes.route('/cats/reviews/new', methods=['POST'])
@login_required
def post_review():
    form = PostReview()
    if form.validate_on_submit():
        review = User_Comments(
            user_id=session['user_id'],
            title=form.title.data['Title'],
            comment=request.form['Comment']
        )
        review.save()
        return jsonify({'message': 'Review posted successfully'})
    return jsonify({'message': 'Review not posted'})
