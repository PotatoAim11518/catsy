from app.models import db, Coat


def seed_coats():
    hairless = Coat(name='Hairless')
    short = Coat(name='Short')
    medium = Coat(name='Medium')
    long = Coat(name='Long')

    db.session.add(hairless)
    db.session.add(short)
    db.session.add(medium)
    db.session.add(long)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the coats table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_coats():
    db.session.execute('TRUNCATE coats RESTART IDENTITY CASCADE;')
    db.session.commit()
