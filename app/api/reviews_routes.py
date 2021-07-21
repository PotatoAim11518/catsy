from flask import Blueprint, jsonify, session, request, render_template, redirect
from flask_login import login_required
from app.models import User_Comment, db
from app.forms import PostReview
from app.api.auth_routes import validation_errors_to_error_messages


reviews_routes = Blueprint('reviews', __name__)


@reviews_routes.route('/<int:id>', methods=['GET'])
def reviews(id):
    review = User_Comment.query.get(id)
    return review.to_dict()


@reviews_routes.route('/new', methods=['GET', 'POST'])
@login_required
def new_review(user_id):
    form = PostReview()
    if form.validate_on_submit():
        review = User_Comment()
        review.comment = form.comment.data
        form.populate_obj(review)
        db.session.add(review)
        db.session.commit()
        return redirect('/')
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@reviews_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_review(cat_id):
    review = User_Comment.query.get_or_404(cat_id)
    if review.author != session['user_id'] and 'user_id' not in session:
        return redirect('/login')
    form = PostReview()
    if form.validate_on_submit():
        review.comment = form.comment.data
        db.session.commit()
        return redirect('/cats')
    elif request.method == 'GET':
        form.content.data = review.content
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@reviews_routes.route('/delete', methods=['POST'])
@login_required
def delete_review(id):
    review = User_Comment.query.get_or_404(id)
    if review.author != session['username'] and 'username' not in session:
        return redirect('/login')
    db.session.delete(review)
    db.session.commit()
    return redirect('/')
