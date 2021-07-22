import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { add_comment } from "../../store/comments";
import * as sessionActions from "../../store/session";


const Comments = ({ scratches }) => {
   const [comment, setComment] = useState('');
   const [errors, setErrors] = useState(null);
   const user = useSelector(state => state.session.user);
   const dispatch = useDispatch();

   const onSubmit = e => {
      e.preventDefault();
      if (comment.length < 1) {
         setErrors({
            comment: "Please enter a comment"
         });
         return
      }
      dispatch(add_comment(comment, user.id));
      setComment('');
      setErrors(null);
   };

   const updateComment = (e) => {
      setComment(e.target.value);
   }

   return (
      <form onSubmit={onSubmit}>
         <div>
            {errors.map((error, index) => <div key={index}>{error}</div>)}
         </div>
         <div>
            <label>Scratching Post</label>
            <input
               type="text"
               name="scratches"
               value={comment}
               required={true}
            ></input>
            <div>
               <button type="submit">Scratch the Post!</button>
            </div>
         </div>
         <div>
            <label>Edit Scratch</label>
            <input
               type="text"
               name="scratches"
               value={comment}
               onChange={updateComment}
            ></input>
             <div>
               <button type="submit">Edit Scratch!</button>
            </div>
         </div>
      </form>
   );
}

export default Comments;
