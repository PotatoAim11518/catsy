// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from 'react-router-dom';

// import { setCat } from "../store/cats";

// function CatDetail() {
// 	const dispatch = useDispatch();
// 	const { id } = useParams();

// 	const cat = useSelector((state) => Object.values(state.cat))

// 	useEffect(() => {
// 		dispatch(setCat(id));
// 	}, [dispatch, id]);

// 	return (
// 		<div>
// 			<div>
// 				<img src={cat.image_url}></img>
// 			</div>
// 		</div>
// 	);
// }

// export default CatDetail;
