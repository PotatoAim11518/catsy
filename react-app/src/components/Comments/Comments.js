import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { add_comment } from "../../store/comments";
import * as sessionActions from "../../store/session";
import styles from "./comments.module.css";

export const Comment = ({ props }) => {
    console.log('TESTING FOR PROPS', props)
    const [comment, setComment] = useState(props.comment);
    const user = useSelector(state => state.session.user);

    const isUser = props.user_id === user.id;

    return (
        <>
            <p className={styles.All_Scratches }>{comment}</p>
            {isUser &&
                <>
                <button
                className={styles.Edit_ScratchBtn}>
                    Edit Scratch
                </button>
                <button
                className={styles.Delete_ScratchBtn}>
                    Delete
                </button>
                </>
            }
        </>
            )
}
