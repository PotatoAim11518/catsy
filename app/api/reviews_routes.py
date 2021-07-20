from flask import Blueprint, jsonify, session, request, render_template, redirect
from flask_login import login_required
from app.models import User_Comment, db
from app.forms import PostReview
from app.api.auth_routes import validation_errors_to_error_messages


reviews_routes = Blueprint('reviews', __name__)


@reviews_routes.route('/cats/reviews/<int:id>')
def reviews(id):
    review = User_Comment.query.get_or_404(id)
    return review.to_dict()


@reviews_routes.route('/cats/reviews/new', methods=['GET', 'POST'])
@login_required
def new_review():
    form = PostReview()
    if form.validate_on_submit():
        review = User_Comment(content=form.content.data, author=session['username'])
        form.populate_obj(review)
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@reviews_routes.route('/cats/reviews/<int:id>/update', methods=['GET', 'POST'])
@login_required
def update_review(id):
    review = User_Comment.query.get_or_404(id)
    if review.author != session['username'] and 'username' not in session:
        return redirect('/login')
    form = PostReview()
    if form.validate_on_submit():
        review.content = form.content.data
        db.session.commit()
        return redirect('/cats/<int:id>')
    elif request.method == 'GET':
        form.content.data = review.content
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@reviews_routes.route('/reviews/<int:id>/delete', methods=['POST'])
@login_required
def delete_review(id):
    review = User_Comment.query.get_or_404(id)
    if review.author != session['username'] and 'username' not in session:
        return redirect('/login')
    db.session.delete(review)
    db.session.commit()
    return redirect('/cats/<int:id>')
