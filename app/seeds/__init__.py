from flask.cli import AppGroup
from .users import seed_users, undo_users
from .ages import seed_ages, undo_ages
from .breeds import seed_breeds, undo_breeds
from .genders import seed_genders, undo_genders
from .sizes import seed_sizes, undo_sizes
from .coats import seed_coats, undo_coats
from .cats import seed_cats, undo_cats
from .user_comments import seed_user_comments, undo_user_comments

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_ages()
    seed_breeds()
    seed_genders()
    seed_sizes()
    seed_coats()
    seed_cats()
    seed_user_comments()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_breeds()
    undo_ages()
    undo_breeds()
    undo_genders()
    undo_sizes()
    undo_coats()
    undo_cats()
    undo_user_comments()
    # Add other undo functions here
