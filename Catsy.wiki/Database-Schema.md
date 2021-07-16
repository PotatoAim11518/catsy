# **Database Schema**

## `users`

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| username    | string    | not null, unique      |
| first_name  | string    | not null              |
| last_name   | string    | not null              |
| email       | string    | not null, unique      |
| created_at  | datetime  | not null              |
| updated_at  | datetime  | not null              |

## `ages`

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| name          | string    | not null,             |
| created_at    | datetime  | not null              |
| updated_at    | datetime  | not null              |

## `breeds`

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| name          | string    | not null,             |
| created_at    | datetime  | not null              |
| updated_at    | datetime  | not null              |

## `genders`

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| name          | string    | not null,             |
| created_at    | datetime  | not null              |
| updated_at    | datetime  | not null              |

## `sizes`

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| name          | string    | not null,             |
| created_at    | datetime  | not null              |
| updated_at    | datetime  | not null              |

## `coats`

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| name          | string    | not null,             |
| created_at    | datetime  | not null              |
| updated_at    | datetime  | not null              |

## `cats`

| column name     | data type | details               |
|-----------------|-----------|-----------------------|
| id              | integer   | not null, primary key |
| owner_id        | integer   | not null, foreign key |
| name            | string    | not null              |
| description     | string    |                       |
| image_url       | string    | not null              |
| age_id          | integer   | not null, foreign key |
| breed_id        | integer   | not null, foreign key |
| gender_id       | integer   | not null, foreign key |
| size_id         | integer   | not null, foreign key |
| coat_id         | integer   | not null, foreign key |
| contact_city    | string    |                       |
| contact_state   | string    |                       |
| spayed_neutered | boolean   | default:false         |
| adopted         | boolean   | default:false         |
| created_at      | datetime  | not null              |
| updated_at      | datetime  | not null              |

* `owner_id` references `users` table
* `age_id` references `ages` table
* `breed_id` references `breeds` table
* `gender_id` references `genders` table
* `size_id` references `sizes` table
* `coat_id` references `coats` table

## `user_comment`

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, foreign key |
| cat_id      | integer   | not null, foreign key |
| comment     | string    | not null              |
| created_at  | datetime  | not null              |
| updated_at  | datetime  | not null              |

* `user_id` references `users` table
* `cat_id` references `cats` table

## `adoption_sessions`

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, foreign key |
| created_at  | datetime  | not null              |
| updated_at  | datetime  | not null              |

* `user_id` references `users` table

## `cart_item`

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, foreign key |
| cat_id      | integer   | not null, foreign key |
| session_id  | integer   | not null, foreign key |
| created_at  | datetime  | not null              |
| updated_at  | datetime  | not null              |

* `user_id` references `users` table
* `cat_id` references `cats` table
* `session_id` references `adoption_sessions` table
