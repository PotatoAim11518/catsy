# Catsy

<p align="center">
    <img src="https://github.com/commanderh/catsy/blob/main/react-app/src/assets/catsy_logo.png" alt="Catsy Logo" />
</p>

## Introduction
Catsy is an adoption website where users can adopt and list their own cats.

## Live Link

* [Catsy](https://catsyapp.herokuapp.com)

## Technologies Used

* React.js
* Redux
* JavaScript
* Python
* Flask
* SQLAlchemy
* Alembic
* WTForms
* PostgreSQL
* Heroku


## Documentation
* [User Stories](https://github.com/commanderh/catsy/wiki/User-Stories)
* [Database Schema](https://github.com/commanderh/catsy/wiki/Database-Schema)
* [Backend(API) Routes](https://github.com/commanderh/catsy/wiki/API-Documentation)
* [Frontend Routes](https://github.com/commanderh/catsy/wiki/Frontend-Routes)


## Features
* [Feature List](https://github.com/commanderh/catsy/wiki/MVP-Feature-List)
## Development
### What you'll need on your machine:

* PostgreSQL
* Pipenv with Python v3.9.3
* Node.js

1. `git clone` this repo
2. `cd` into the local repo
3. Run `pipenv install -r --dev dev-requirements.txt && pipenv install -r requirements.txt`
4. Create your own `.env` file based on the provided `.env.example`.
5. Create a user and database in your PostgreSQL that matches your `.env` configuration
6. In the first terminal, run `pipenv shell` to activate the Pipenv environment.
7. Run `flask db upgrade` and then `flask seed all` to apply migrations and seed data to your database.
8. Open another terminal window and `cd` into the local repo, then `cd` into `react-app`
9. Run `npm install`
10. In your terminal running Pipenv shell, run `flask run`.
11. In your terminal in the `react-app`, run `npm start`.
12. Your app should open in your default browser.
13. If you are planning on developing, please make a fork and create pull requests as necessary.

## Challenges
### Eager Loading Database
### Rendering button states based on user session
### Routing assets to properly render on Heroku
### Trying to adopt cats during your session when another user has adopted the cat
### Re-rendering the cart to remove already adopted cats
### Pulling seed from an external API and properly formatting the data to fit the database schema
### Adding mouse over state changes for the dropdown menu
