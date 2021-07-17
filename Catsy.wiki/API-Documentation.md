# API-Routes

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

## Homepage

## Login

## Signup

## Demo User

## Logout

## Cats

## Cardboard Box (Shopping Cart)

* A logged in user can view, add, and remove cats they wish to adopt into the Cardboard Box.
  * `GET /api/cart_item/:id`
  * `POST /api/cart_item/add`
  * `DELETE /api/cart_item/remove`

* When a logged in user adds a cat for adoption, a session cart is created; when the cart is cleared, this session cart and its associated cart_items are destroyed in a cascade. Note: session carts exist because we may wish to add things like cart totals in the future.
  * `GET /api/adoption_sessions/:id`
  * `POST /api/adoption_sessions`
  * `DELETE /api/adoption_sessions/:id`

## Comments (Scratches)

## Search

## Bonus: Profile Page
