from flask import Blueprint, jsonify, session, request, render_template, flash
from flask_login import login_required
from app.models import User_Comment
from app.forms import PostReview

reviews_routes = Blueprint('reviews', __name__, url_prefix='/cats/reviews')


@reviews_routes.route('/<int:id>', methods=['GET'])
def reviews_index(id):
    reviews = User_Comment.query.all()
    return {review.id:review.to_dict for review in reviews}


@reviews_routes.route('/new', methods=['GET', 'POST'])
@login_required
def post_review():
    form = PostReview()
    if form.validate_on_submit():
        flash(f'Your review has been posted!', 'success')
        review = User_Comment(
            user_id=session['user_id'],
            title=form.title.data['Title'],
            comment=request.form['Comment']
        )
        review.save()
        return render_template('create_reviews.html', title='New Review', form=form)
