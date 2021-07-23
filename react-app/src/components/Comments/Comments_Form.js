import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { add_comment } from "../../store/comments";
import * as sessionActions from "../../store/session";
import styles from "./comments.module.css";


export const CommentsForm = ({ catScratch }) => {
   const dispatch = useDispatch();
   const user = useSelector(state => state.session.user);
   // const cat_id = useSelector(state => state.comments.cat_id);
   const [errors, setErrors] = useState(null);
   const [comment, setComment] = useState('');

   const onSubmit = async (e) => {
      e.preventDefault();
      console.log(e);
      console.log(user.id);
      if (comment.length < 1) {
         setErrors({
            comment: "Please enter a comment"
         });
         return
      }
      setErrors(null);

      const catScratch = {
         comment,
         user_id: user.id,
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
      <div className={styles.All_Scratches}>
         <div className={styles.Scratches_Div}>
            <h1 className={styles.Header}>Scratching Post</h1>
            <form
               onSubmit={onSubmit}
               className={styles.Submit}>
               <div
                  className={styles.TextContainer}>
               <textarea
                  id="scratch"
                  type="text"
                  name="scratches"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  placeholder="<Purrrr> Scratches please! But not the belly if you like your fingers..."
                  className={styles.TextArea}
               ></textarea>
               <div>
                     <button
                        className={styles.Submit_ScratchBtn} type="submit">Scratch the Kitty!</button>

               </div>
            </div>
            </form>
         </div>
      </div>
   )
}
export default CommentsForm;
