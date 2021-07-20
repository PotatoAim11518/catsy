import { csrfFetch } from './csrf';

const NEW_REVIEW = 'cats/reviews/new'
const GET_REVIEWS = 'cats/reviews/get'
const DELETE_REVIEW = 'cats/reviews/delete'
const UPDATE_REVIEW = 'cats/reviews/update'

const new_review = (payload) => {(
    type: NEW_REVIEW,
    payload
)};

const get_reviews = (payload) => {(
    type: GET_REVIEWS,
    payload
)};

const delete_review = (payload) => { (
    type: DELETE_REVIEW,
    payload
)};

const update_review = (payload) => {(
    type: UPDATE_REVIEW,
    payload
)};


export const add_review = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews_routes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(new_review(review));
        return review;
    }
}

export const get_all_reviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews_routes`);

    if (response.ok) {
        const review = await response.json();
        dispatch(get_reviews(review));
        return 'SUCCESS'
    }
}

export const remove_review = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews_routes/${id}`, {
        method: 'DELETE',
    });
    const review = await response.json();
    dispatch(delete_review(review));
    return 'DELETED'
};

export const edit_review = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews_routes`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    const review = await response.json();
    dispatch(update_review(review));
    return 'SUCCESS'
}

const initialState = {
    list: [],
    current_review: null
};


