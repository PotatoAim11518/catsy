import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { add_comment } from "../../store/comments";
import * as sessionActions from "../../store/session";
import {CommentsForm} from "./Comments_Form";
import { get_all_comments } from "../../store/comments";
import { Comment } from "./Comments";
import styles from "./comments.module.css";
import * as userActions from "../../store/comments";


const CommentPage = () => {
    const comments = useSelector((state) => Object.values(state.comments_reducer));
    const dispatch = useDispatch();
    const {cat_id} = useParams();
    useEffect(() => {
        dispatch(get_all_comments(cat_id))
    }, [dispatch, cat_id])

    if (!comments) {
        return null
    }

    return (
        <div>
            <CommentsForm />
            {
                comments.map(comment => <Comment key={comment.id} props={comment} />).reverse()
            }
        </div>
    )
}

export default CommentPage;
