//*----------------- Action Creators ---------------//

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

//**********************************************************
//? -*-*-*-*-*-*-*-*-*-*- Thunks -*-*-*-*-*-*-*-*-*-*-//
//* **********************************************************/

//----------------- Get All comments ---------------//
//* - ***** it works *****

export const get_all_comments = (cat_id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${cat_id}`);
    console.log("RESSPOOOONNNSSEEE" ,response);

    if (response.ok) {
        const comment = await response.json();
        console.log("COMMMMENNNNTTTTSSS",comment);
        dispatch(get_comments(comment.all_comments));
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
    console.log(payload);
    const response = await fetch(`/api/comments/${id}/update`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({comment: payload}),
    });
    const comment = await response.json();
    console.log("Testing for Comments", comment);
    dispatch(update_comment(comment));
    return 'SUCCESS'
}

// --------------- Delete a comment --------------- //
//* - ***** it works *****

export const remove_comment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}/delete`, {
        method: 'DELETE',
    });
    dispatch(delete_comment(id));
    return 'DELETED'
};

//--------------------------------------------------//

const initialState = {};

//?----------------- Reducer -----------------//

const comments_reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_COMMENT: {
            const new_state = {
                ...state,
                [action.payload.id]: action.payload
            };
            return new_state;
        }
        case GET_COMMENTS: {
            const new_state = {
            };
            action.payload.forEach((comment) => {
                new_state[comment.id] = comment;
            });
            return new_state;
        }
        case DELETE_COMMENT: {
            const new_state = {
                ...state
            };
            delete new_state[action.payload];
            return new_state;
        }
        case UPDATE_COMMENT: {
            const new_state = {
                ...state,
                [action.payload.id]: action.payload
            };
            return new_state;
        }
        default:
            return state;
    }
}

export default comments_reducer;
