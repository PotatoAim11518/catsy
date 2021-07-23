const SET_CATS = 'cats/SET_CATS';
const UPDATE_CAT = 'cats/UPDATE_CAT';

const setCats = (cats) => ({
  type: SET_CATS,
  cats
})

const updateCat = (cat) => ({
  type: UPDATE_CAT,
  cat
})

export const getCats = () => async (dispatch) => {
  const response = await fetch('/api/cats')
  const cats = await response.json()
  dispatch(setCats(cats))
}

export const changeCat = (cat_id, payload) => async (dispatch) => {
  const response = await fetch(`/api/cats/${cat_id}`, {
    method: "PATCH",
    headers: {'Content-type': 'application/json'},
    body: {
      payload
    }
  })
  const cat = await response.json()
  dispatch(updateCat(cat))
}

const initialState = {};

export default function catReducer(state=initialState, action) {
  switch(action.type) {
    case SET_CATS:
      const allCats = {}
      action.cats['cats'].forEach((cat) => {
        allCats[cat['id']] = cat
      })
      return {...state, ...allCats}
    case UPDATE_CAT:
      return {...state, [action.cat['id']]: action.cat}
    default:
      return state;
  }
}
