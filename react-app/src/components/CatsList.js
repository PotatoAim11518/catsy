import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCats } from "../store/cats";

function CatsList() {
	const dispatch = useDispatch();
	const cats = useSelector((state) => state.catsReducer)
	// console.log("%%%%%%%%%%%%%", cats)
	useEffect(() => {
		dispatch(setCats());
	}, [dispatch]);

	return (
		<div>
			<div>
				{/* catlist.js ####### */}
				{cats?.map((cat) => {
					return <div key={`${cat.id}`}>{cat.name} - {cat.contact_city}, {cat.contact_state}</div>
				})}
			</div>
		</div>
	);
}

export default CatsList;
