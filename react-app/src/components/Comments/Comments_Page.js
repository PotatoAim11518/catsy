import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { add_comment } from "../../store/comments";
import * as sessionActions from "../../store/session";
import {CommentsForm} from "./Comments_Form";
import { get_all_comments } from "../../store/comments";
import { Comment } from "./Comments";
import styles from "./comments.module.css";


const mockData = {
    'all_comments': [
        {
            'cat_id':25,
            'comment':'wahoo!!!',
            "created_at": "Tue, 20 Jul 2021 11:25:10 GMT",
            "id": 137,
            "updated_at": "Tue, 20 Jul 2021 11:25:10 GMT",
            "user_id": 13
        },
        {
            "cat_id": 25,
            "comment": "Laborum necessitatibus delectus, ipsa maiores sequi tenetur dolores itaque quam.",
            "created_at": "Tue, 20 Jul 2021 11:25:10 GMT",
            "id": 137,
            "updated_at": "Tue, 20 Jul 2021 11:25:10 GMT",
            "user_id": 1
          }
    ]
}

const CommentPage = () => {
    const [comments, setComments] = useState(mockData);
    const dispatch = useDispatch();
    console.log('testingggg', comments)
    useEffect(() => {
        // setComments(get_all_comments(cat_id));
        dispatch(get_all_comments())
    }, [dispatch])



    return (
        <div>
            <CommentsForm />
            {
                comments["all_comments"].map(comment => <Comment key={comment.id} props={comment} />)
            }
        </div>
    )
}

export default CommentPage;
