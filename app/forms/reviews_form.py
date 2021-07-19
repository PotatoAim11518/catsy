from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired
from app.models import User_Comment, db

class PostReview(FlaskForm):
    content = TextAreaField('Review', validators=[DataRequired()])
    submit = SubmitField('Submit')
