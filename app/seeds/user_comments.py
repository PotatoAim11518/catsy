from app.models import db, User_Comment
from random import randrange
from lorem_text import lorem


def rand_user_id():
    return randrange(2, 12)
def rand_cat_id():
    return randrange(1, 100)


def seed_user_comments():
    for i in range(1, 201):
        comment = User_Comment(
            user_id=rand_user_id(),
            cat_id=rand_cat_id(),
            comment=lorem.sentence()
        )
        db.session.add(comment)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the user_comments table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_user_comments():
    db.session.execute('TRUNCATE user_comments RESTART IDENTITY CASCADE;')
    db.session.commit()
