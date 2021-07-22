from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired
from app.models import User_Comment, db

class CommentForm(FlaskForm):
    user_id = IntegerField('User ID', validators=[DataRequired()])
    cat_id = IntegerField('Category ID', validators=[DataRequired()])
    comment = TextAreaField('Review', validators=[DataRequired()])
    # submit = SubmitField('Submit')
