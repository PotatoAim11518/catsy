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

import Button from "../Button";

export const Comment = ({ props }) => {
    const [comment, setComment] = useState(props.comment);
    const [edit, setEdit] = useState(false);
    const [updatedComment, setUpdatedComment] = useState(props.comment);
    const user = useSelector((state) => state.session.user);
    const isUser = props.user_id === user?.id;
    const username = comment?.user?.username

    const dispatch = useDispatch();

    function updateComment(e) {
        e.preventDefault();
        dispatch(userActions.edit_comment(props.id, updatedComment))
        setEdit(false);
    }

    function deleteComment(e) {
        e.preventDefault();
        dispatch(userActions.remove_comment(props.id))
    }


    return (
        <>
            <div className={styles.Scratch_Container}>
                <p className={styles.username}>{props.user.username} </p>
                {!edit ? <p className={styles.Get_Scratches}>{updatedComment}</p> :
                    <input className={styles.Get_Scratches}
                        type="text"
                        value={updatedComment}
                        onChange={(e) => setUpdatedComment(e.target.value)}
                    />
                }
                <div className={styles.commentButtonContainer}>
                    {isUser &&
                        <>
                            <Button text={"Delete"} action={deleteComment} color={"black"} width={100}/>
                            {edit ? <Button text={"Save"} action={updateComment} color={"pink"} width={100}/> : null}
                            <Button text={!edit ? 'Edit' : 'Cancel'} action={() => setEdit(!edit)} color={"pink"} width={100}/>
                            {/* <button
                            className={styles.Edit_ScratchBtn}
                            onClick={() => setEdit(!edit) }>
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
                            </button> : null} */}
                        </>
                    }
                </div>
            </div>
        </>
            )
}
