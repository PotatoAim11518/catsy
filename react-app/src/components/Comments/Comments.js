import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { add_comment } from "../../store/comments";
import * as sessionActions from "../../store/session";
import styles from "./comments.module.css";
import { useParams } from 'react-router-dom';
import User from "../User";
import userComponents from "../UsersList";
import Cat from "../Cat";
import * as userActions from "../../store/comments";


export const Comment = ({ props }) => {
    console.log('TESTING FOR PROPS', props)
    const [comment, setComment] = useState(props.comment);
    const [edit, setEdit] = useState(false);
    const [updatedComment, setUpdatedComment] = useState(props.comment);
    const user = useSelector((state) => state.session.user);
    const isUser = props.user_id === user?.id;
    const username = user?.username

    const dispatch = useDispatch();

    function updateComment(e) {
        e.preventDefault();
        dispatch(userActions.edit_comment(props.id, updatedComment))
        setEdit(false);
    }

    function deleteComment(e) {
        e.preventDefault();
        console.log("THESE ARE COMMNETTSSSS", comment);
        dispatch(userActions.remove_comment(props.id))
    }

    return (
        <>
            {/* <div className={styles.blankSpace}></div> */}
            <div className={styles.Scratch_Container}>
                <p className={styles.username}>User: {username} </p>
                {!edit ? <p className={styles.Get_Scratches}>∙ {updatedComment}</p> :
                    <input
                        type="text"
                        value={updatedComment}
                        onChange={(e) => setUpdatedComment(e.target.value)}
                    />
                    }
                    {isUser &&
                        <>
                        <button
                        className={styles.Edit_ScratchBtn}
                        onClick={() => setEdit(!edit) }
                    >
                            {!edit? 'Edit': 'Cancel'}
                        </button>
                        <button
                        className={styles.Delete_ScratchBtn}
                        onClick={deleteComment}>
                            Delete
                    </button>
                    {edit? <button
                        className={styles.Delete_ScratchBtn}
                        onClick={updateComment}
                    >
                        Save
                    </button> : null}
                        </>
                    }
            </div>
        </>
            )
}
