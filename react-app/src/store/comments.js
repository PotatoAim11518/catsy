const NEW_COMMENT = '/cats/comments/new'
const GET_COMMENTS = 'cats/comments/get'
const DELETE_COMMENT = 'cats/comments/delete'
const UPDATE_COMMENT = 'cats/comments/update'

const new_comment = (payload) => ({
    type: NEW_COMMENT,
    payload
});

const get_comments = (payload) => ({
    type: GET_COMMENTS,
    payload
});

const delete_comment = (payload) => ({
    type: DELETE_COMMENT,
    payload
});

const update_comment = (payload) => ({
    type: UPDATE_COMMENT,
    payload
});

//* **********************************************************/
//----------------- Thunks -----------------//
//* **********************************************************/

//----------------- Get All comments ---------------//

export const get_all_comments = (cat_id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${cat_id}`);

    if (response.ok) {
        const comment = await response.json();
        dispatch(get_comments(comment));
        return 'SUCCESS'
    }
}

//----------------- Post a comment ---------------//
//* - ***** it works *****

export const add_comment = (payload) => async (dispatch) => {
    const response = await fetch(`/api/comments/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(new_comment(comment));
        return comment;
    }
}


// --------------- Update comment --------------- //
//* - ***** it works *****

export const edit_comment = (id, payload) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}/update`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    const comment = await response.json();
    dispatch(update_comment(comment));
    return 'SUCCESS'
}

// --------------- Delete a comment --------------- //
//* - ***** it works *****

export const remove_comment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}/delete`, {
        method: 'DELETE',
    });
    const comment = await response.json();
    dispatch(delete_comment(comment));
    return 'DELETED'
};

//--------------------------------------------------//

const initialState = {
    list: [],
    current_comment: null
};

//----------------- Reducers -----------------//

const comments_reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_COMMENT: {
            const new_state = {
                ...state,
                comment: action.payload
            };
            return new_state;
        }
        case GET_COMMENTS: {
            const new_state = {
                ...state,
                list: action.payload
            };
            return new_state;
        }
        case DELETE_COMMENT: {
            const new_state = {
                ...state,
                list: state.list.filter(comment => comment.id !== action.payload.id)
            };
            return new_state;
        }
        case UPDATE_COMMENT: {
            const new_state = {
                ...state,
                current_comment: action.payload
            };
            return new_state;
        }
        default:
            return state;
    }
}

export default comments_reducer;
