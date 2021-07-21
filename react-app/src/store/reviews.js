const NEW_REVIEW = '/cats/reviews/new'
const GET_REVIEWS = 'cats/reviews/get'
const DELETE_REVIEW = 'cats/reviews/delete'
const UPDATE_REVIEW = 'cats/reviews/update'

const new_review = (payload) => ({
    type: NEW_REVIEW,
    payload
});

const get_reviews = (payload) => ({
    type: GET_REVIEWS,
    payload
});

const delete_review = (payload) => ({
    type: DELETE_REVIEW,
    payload
});

const update_review = (payload) => ({
    type: UPDATE_REVIEW,
    payload
});

//----------------- Thunks -----------------//
/***********************************************************/
//----------------- Get All Reviews ---------------//

export const get_all_reviews = (cat_id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${cat_id}`);

    if (response.ok) {
        const comment = await response.json();
        dispatch(get_reviews(comment));
        return 'SUCCESS'
    }
}

//----------------- Post a Review ---------------//
// - ***** it works *****

export const add_review = (payload) => async (dispatch) => {
    const response = await fetch(`/api/reviews/new`, {
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


// --------------- Update Review --------------- //

export const edit_review = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
    });
    const review = await response.json();
    dispatch(update_review(review));
    return 'SUCCESS'
}

// --------------- Delete a Review --------------- //

export const remove_review = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}/delete`, {
        method: 'DELETE',
    });
    const review = await response.json();
    dispatch(delete_review(review));
    return 'DELETED'
};


const initialState = {
    list: [],
    current_review: null
};

//----------------- Reducers -----------------//

const reviews_reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_REVIEW: {
            const new_state = {
                ...state,
                review: action.payload
            };
            return new_state;
        }
        case GET_REVIEWS: {
            const new_state = {
                ...state,
                list: action.payload
            };
            return new_state;
        }
        case DELETE_REVIEW: {
            const new_state = {
                ...state,
                list: state.list.filter(review => review.id !== action.payload.id)
            };
            return new_state;
        }
        case UPDATE_REVIEW: {
            const new_state = {
                ...state,
                current_review: action.payload
            };
            return new_state;
        }
        default:
            return state;
    }
}

export default reviews_reducer;
