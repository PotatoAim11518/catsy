import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { add_comment } from "../../store/comments";
import * as sessionActions from "../../store/session";

export const Comment = (props) => {
    console.log('TESTING FOR PROPS', props)
    const [comment, setComment] = useState(props.comment);
    console.log('TESTING FOR COMMENTS', comment)
    const user = useSelector(state => state.session.user);

    const isUser = props.user_id === user.id;

    return (
        <>
            <p>{comment}</p>
            <p>TESTING1232345WF</p>
            {isUser &&
                <>
                <button>
                    Edit Scratch
                </button>
                <button>
                    Delete
                </button>
                </>
            }
        </>
            )
}
