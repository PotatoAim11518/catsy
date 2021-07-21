//TODO Define Action Types as Constants
const GET_CATS = "cats/GET_CATS";
const GET_CAT = "cats/GET_CAT";

//TODO Define Action Creators
const getCats = (cats) => ({
	type: GET_CATS,
	payload: cats
});

const getCat = (cat) => ({
	type: GET_CAT,
	payload: cat
});

//TODO Define Thunks
//! get all cats
export const setCats = () => async (dispatch) => {
	const response = await fetch(`/api/cats`);

	if (response.ok) {
		const data = await response.json();
		// console.log('****GET ALL CATS****', data)
		dispatch(getCats(data.cats));
	}
};

//! get singular cat
export const setCat = (id) => async (dispatch) => {
	const response = await fetch(`/api/cats/${id}`);

	if (response.ok) {
		const data = await response.json();
		// console.log('****GET A CAT****', data)
		dispatch(getCat(data));
	}
};

//TODO Define an initial state
const initialState = [];

//TODO Define a reducer
function catsReducer(state = initialState, action) {
	const newState = []

	switch (action.type) {
		case GET_CATS:
			action.payload.forEach((cat) => {
				newState.push(cat);
				// newState[cat.id] = cat;
			});

			return newState;

		case GET_CAT:
			newState.push(action.payload);
			// newState[action.payload.id] = action.payload;

			return newState

		default:
			return state;
	}
}

//TODO Export the reducer
export default catsReducer;
