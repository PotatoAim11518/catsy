import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";


export const Reviews = ({ reviews }) => {
    return (
        <List>
            {reviews.map(review => {
                return (
                    <ListItem key={review.id}>
                        
        </List>
    )
