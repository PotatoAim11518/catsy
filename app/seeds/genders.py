from app.models import db, Gender


def seed_genders():
    male = Gender(name='Male')
    female = Gender(name='Female')

    db.session.add(male)
    db.session.add(female)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the genders table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_genders():
    db.session.execute('TRUNCATE genders RESTART IDENTITY CASCADE;')
    db.session.commit()
