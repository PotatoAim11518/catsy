from flask import Blueprint, jsonify, session, request, render_template, redirect
from flask_login import login_required, current_user
from app.models import User_Comment, db
from app.forms.comments_form import CommentForm
from app.api.auth_routes import validation_errors_to_error_messages


comments_routes = Blueprint('comments', __name__)

# ------------ Get all comments ------------

@comments_routes.route('/<int:cat_id>', methods=['GET'])
def comments(cat_id):
    # all_comments = User_Comment.query.filter(User_Comment.cat_id == cat_id).all()
    all_comments = User_Comment.query.filter.all(User_Comment.cat_id == cat_id)
    return {'all_comments': [comment.to_dict() for comment in all_comments]}

# ------------ Post a comment ------------
# ***** it works *****

@comments_routes.route('/new', methods=['GET', 'POST'])
@login_required
def new_comment():
    form = CommentForm()
    print(form.data)
    if form.validate_on_submit():
        comment = User_Comment()
        comment.comment = form.comment.data
        form.populate_obj(comment)
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# ------------ Update a comment ------------
# ***** it works *****

@comments_routes.route('/<int:id>/update', methods=['PUT'])
@login_required
def update_comment(id):
    comment = User_Comment.query.get_or_404(id)
    form = CommentForm()
    if form.validate_on_submit():
        comment.comment = request.json["comment"]
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



# ------------ Delete a comment ------------
# ***** it works *****

@comments_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = User_Comment.query.get_or_404(id)
    db.session.delete(comment)
    db.session.commit()
    print("success!")
    return redirect ('/')
