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
    const user = useSelector(state => state.session.user);
    const isUser = props.user_id === user.id;
    const username = user.username
    const catId = props.cat_id;

    return (
        <>
            {/* <div className={styles.blankSpace}></div> */}
            <div className={styles.Scratch_Container}>
                <p className={styles.username}>User: {username} </p>
                <p className={styles.Get_Scratches}>∙ {comment}</p>
                    {isUser &&
                        <>
                        <button
                        className={styles.Edit_ScratchBtn}>
                            Edit
                        </button>
                        <button
                        className={styles.Delete_ScratchBtn}>
                            Delete
                        </button>
                        </>
                    }
            </div>
        </>
            )
}
