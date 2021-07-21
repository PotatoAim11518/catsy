import React, { useState } from "react";
import { useDispatch, useSelector, useState } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";


const Comments = ({ comments }) => {
   const [comment, setComment] = useState('');
   const [errors, setErrors] = useState(null);
   const dispatch = useDispatch();

   const onSubmit = async (e) => {
      e.preventDefault();
      const data = await dispatch(
      // const { comment } = this.state;
      // const { id } = this.props;
      // const { user_id } = sessionActions.getState();
      // const { errors } = await dispatch(sessionActions.postComment(id, comment, user));
      // setErrors(errors);
      // setComment('');
   }
}
