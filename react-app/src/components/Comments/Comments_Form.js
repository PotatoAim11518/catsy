import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { add_comment } from "../../store/comments";
import * as sessionActions from "../../store/session";
import * as userActions from "../../store/comments"
import styles from "./comments.module.css";

import Button from "../Button";


export const CommentsForm = ({ catScratch }) => {
   const dispatch = useDispatch();
   const user = useSelector(state => state.session.user);
   // const cat_id = useSelector(state => state.comments.cat_id);
   const [errors, setErrors] = useState([]);
   const [comment, setComment] = useState('');

   const user_id = user?.id
   const cat_id = useParams().cat_id;


   const onSubmit = async (e) => {
      e.preventDefault();
      if (user_id) {
         if (comment.length < 1) {
            setErrors(['Please scratch something to post.']);
            return
         }
         setErrors([]);
         const data = {
            cat_id,
            comment,
            user_id
         }
         dispatch(userActions.add_comment(data));
      } else {
         setErrors(['You must be logged in to scratch a post.'])
      }
   };



   useEffect(() => {
      setErrors([]);
   }, [dispatch, user_id]);


   return (
      <div className={styles.All_Scratches}>
         <div className={styles.Scratches_Div}>
            <h1 className={styles.Header}>Scratch a Post</h1>
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
                     {/* <button
                        className={styles.Submit_ScratchBtn} type="submit">Scratch the Kitty!</button> */}
                     {/* refactoring using custom Button component  */}
                     <button type="submit">
                        <Button text={"Scratch"} action={onSubmit} color={"pink"} width={150}/>
                     </button>
                  </div>
                  <div className={styles.errorsContainer}>
                     {errors?.map((error, ind) => (
                        <div className={styles.error} key={ind}>{error}</div>
                     ))}
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}
export default CommentsForm;
