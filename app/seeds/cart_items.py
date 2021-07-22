from app.models import db, Cart_Item


def seed_cart_items():
    demo_cart_item_1 = Cart_Item(user_id=1, cat_id=1, session_id=1)
    demo_cart_item_2 = Cart_Item(user_id=1, cat_id=2, session_id=1)
    demo_cart_item_3 = Cart_Item(user_id=1, cat_id=7, session_id=1)
    demo_cart_item_4 = Cart_Item(user_id=1, cat_id=11, session_id=1)
    demo_cart_item_5 = Cart_Item(user_id=1, cat_id=25, session_id=1)
    demo_cart_item_6 = Cart_Item(user_id=1, cat_id=69, session_id=1)
    demo_cart_item_7 = Cart_Item(user_id=2, cat_id=1, session_id=2)
    demo_cart_item_8 = Cart_Item(user_id=2, cat_id=3, session_id=2)
    demo_cart_item_9 = Cart_Item(user_id=2, cat_id=3, session_id=3)
    demo_cart_item_10 = Cart_Item(user_id=3, cat_id=43, session_id=3)

    db.session.add(demo_cart_item_1)
    db.session.add(demo_cart_item_2)
    db.session.add(demo_cart_item_3)
    db.session.add(demo_cart_item_4)
    db.session.add(demo_cart_item_5)
    db.session.add(demo_cart_item_6)
    db.session.add(demo_cart_item_7)
    db.session.add(demo_cart_item_8)
    db.session.add(demo_cart_item_9)
    db.session.add(demo_cart_item_10)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the cart_items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_cart_items():
    db.session.execute('TRUNCATE cart_items RESTART IDENTITY CASCADE;')
    db.session.commit()
