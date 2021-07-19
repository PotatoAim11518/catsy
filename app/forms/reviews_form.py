from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired
from app.models import User_Comments, db

class PostReview(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    content = TextAreaField('Review', validators=[DataRequired()])
    submit = SubmitField('Submit')