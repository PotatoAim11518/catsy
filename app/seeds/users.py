from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')

    ilene = User(
        username="Kelsi15",
        email="Mollie.Hoeger88@gmail.com",
        password="mnEQGAm3O5p9GAh"
    )
    tierra = User(
    username="Rosella.Mraz57",
        email="Reed.Bartell@gmail.com",
        password="0O2p4fh1zri8zlx"
    )
    cristal = User(
    username="Obie.Mosciski",
        email="Emmalee_Heidenreich28@hotmail.com",
        password="weosaEdIPoXpUYD"
    )
    kody = User(
    username="Darrin.Goodwin",
        email="Elda_Gutkowski90@hotmail.com",
        password="1MF2EeyyO5vg9E6"
    )
    roel = User(
    username="Stefan.Fahey74",
        email="Angelina87@gmail.com",
        password="UdfyxVX3A3ARb4c"
    )
    amya = User(
    username="Obie_Green",
        email="Mandy57@hotmail.com",
        password="9hWUljBcExTYuFO"
    )
    maggie = User(
    username="Frederik62",
        email="Holly.Johnson79@hotmail.com",
        password="QBAcbDTiWooKmLh"
    )
    danny = User(
    username="Jazmin_Schinner",
        email="Benedict73@hotmail.com",
        password="BvVYQg5y73wDMhs"
    )
    royce = User(
    username="Mozelle_Runolfsdottir",
        email="Mortimer_Lueilwitz@yahoo.com",
        password="8izmxkSciSIVeGF"
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(ilene)
    db.session.add(tierra)
    db.session.add(cristal)
    db.session.add(kody)
    db.session.add(roel)
    db.session.add(amya)
    db.session.add(maggie)
    db.session.add(danny)
    db.session.add(royce)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
