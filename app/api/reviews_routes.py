from flask import Blueprint, jsonify, session, request, render_template, redirect
from flask_login import login_required
from app.models import User_Comment, db
from app.forms import PostReview
from app.api.auth_routes import validation_errors_to_error_messages


reviews_routes = Blueprint('reviews', __name__)

# ------------ Get all reviews ------------

@reviews_routes.route('/<int:cat_id>', methods=['GET'])
def reviews(cat_id):
    # all_reviews = User_Comment.query.filter(User_Comment.cat_id == cat_id).all()
    all_reviews = User_Comment.query.filter(User_Comment.cat_id == cat_id).all()
    return {'all_reviews': [review.to_dict() for review in all_reviews]}

# ------------ Post a review ------------
# ***** it works *****

@reviews_routes.route('/new', methods=['GET', 'POST'])
@login_required
def new_review():
    form = PostReview()
    print(form.data)
    if form.validate_on_submit():
        review = User_Comment()
        review.comment = form.comment.data
        form.populate_obj(review)
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# ------------ Update a review ------------

@reviews_routes.route('/<int:id>/update', methods=['PUT'])
@login_required
def update_review(id):
    review = User_Comment.query.get_or_404(id)
    if review.author != session['user_id'] and 'user_id' not in session:
        return redirect('/login')
    form = PostReview()
    if form.validate_on_submit():
        review.comment = form.comment.data
        db.session.commit()
        return review.to_dict()
    elif request.method == 'GET':
        form.content.data = review.content
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# ------------ Delete a review ------------

@reviews_routes.route('/<int:id>/delete', methods=['POST'])
@login_required
def delete_review(id):
    review = User_Comment.query.get_or_404(id)
    if review.author != session['username'] and 'username' not in session:
        return redirect('/login')
    db.session.delete(review)
    db.session.commit()
    return redirect('/')
