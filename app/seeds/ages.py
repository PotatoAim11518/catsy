from app.models import db, Age


def seed_ages():
    kitten = Age(name='Kitten')
    young = Age(name='Young')
    adult = Age(name='Adult')
    senior = Age(name='Senior')

    db.session.add(kitten)
    db.session.add(young)
    db.session.add(adult)
    db.session.add(senior)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the ages table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_ages():
    db.session.execute('TRUNCATE ages RESTART IDENTITY CASCADE;')
    db.session.commit()
