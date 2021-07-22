import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { add_comment } from "../../store/comments";
import * as sessionActions from "../../store/session";


export const Comments = ({ catScratch }) => {
   const dispatch = useDispatch();
   const user = useSelector(state => state.session.user.id);
   // const cat_id = useSelector(state => state.comments.cat_id);
   const [errors, setErrors] = useState(null);
   const [comment, setComment] = useState('');

   const onSubmit = async (e) => {
      e.preventDefault();
      console.log(e);
      if (comment.length < 1) {
         setErrors({
            comment: "Please enter a comment"
         });
         return
      }
      setErrors(null);

      const catScratch = {
         comment,
         user_id: 2,
         cat_id: 4
      }
      dispatch(add_comment(catScratch));
   };

   const updateComment = (e) => {
      setComment(e.target.value);
   }

   // useEffect(() => {
   //    setComment(add_comment(comment, user.id));
   // }, [dispatch]);


   return (
      <div>
         <h1>Scratching Post</h1>
         <form onSubmit={onSubmit}>
         <div>
            <textarea
               id="scratch"
               type="text"
               name="scratches"
               onChange={(e) => setComment(e.target.value)}
               value={comment}
               // required={true}
            ></textarea>
            <div>
               <button type="submit">Scratch the Post!</button>
               <button type="submit">Edit Scratch!</button>
            </div>
         </div>
         </form>
      </div>
   )
}
export default Comments;
