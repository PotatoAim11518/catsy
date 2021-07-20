import { csrfFetch } from './csrf';

const NEW_REVIEW = 'cats/reviews/new'
const GET_REVIEWS = 'cats/reviews/get'
const DELETE_REVIEW = 'cats/reviews/delete'

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


export const new_review_form = (payload) => async (dispatch) => {
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
        const data = await response.json();
        dispatch(get_reviews(data));
        return 'SUCCESS'
    }
}


export const remove_comment = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews_routes/${id}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    dispatch(delete_review(data));
    return 'DELETED'
};
