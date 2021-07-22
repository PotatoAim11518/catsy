from app.models import db, Adoption_Session


def seed_adoption_sessions():
    demo_session_1 = Adoption_Session(user_id=1)
    demo_session_2 = Adoption_Session(user_id=2)
    demo_session_3 = Adoption_Session(user_id=3)

    db.session.add(demo_session_1)
    db.session.add(demo_session_2)
    db.session.add(demo_session_3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the adoption_sessions table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_adoption_sessions():
    db.session.execute('TRUNCATE adoption_sessions RESTART IDENTITY CASCADE;')
    db.session.commit()
