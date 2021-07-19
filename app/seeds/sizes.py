from app.models import db, Size


def seed_sizes():
    small = Size(name='Small')
    medium = Size(name='Medium')
    large = Size(name='Large')
    chonk = Size(name='Chonk')

    db.session.add(small)
    db.session.add(medium)
    db.session.add(large)
    db.session.add(chonk)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the sizes table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_sizes():
    db.session.execute('TRUNCATE sizes RESTART IDENTITY CASCADE;')
    db.session.commit()
