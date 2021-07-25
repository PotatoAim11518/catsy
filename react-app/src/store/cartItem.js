const SET_CART_ITEMS = 'cart/SET_CART_ITEM';
const ADD_CART_ITEM = 'cart/ADD_CART_ITEMS';
const REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM';
const REMOVE_ADOPTED = 'cart/REMOVE_ADOPTED';
const CLEAR_CART = 'cart/CLEAR_CART';

const setItems = (items) => ({
  type: SET_CART_ITEMS,
  items
})

const add = (item) => ({
  type: ADD_CART_ITEM,
  item
})

const remove = (item) => ({
  type: REMOVE_CART_ITEM,
  item
})

const removeAdopted = () => ({
  type: REMOVE_ADOPTED
})

const clear = () => ({
  type: CLEAR_CART
})

export const getItems = () => async (dispatch) => {
  const response = await fetch(`/api/cart/items`);
  const items = await response.json();
  dispatch(setItems(items))
}

export const addItem = (cat_id) => async (dispatch) => {
  const response = await fetch(`/api/cart/items/${cat_id}/add`, {
    method: "POST",
    body: JSON.stringify({
      cat_id
    }),
  })
  if (response.ok) {
    const item = await response.json()
    dispatch(add(item))
    return item
  }
}

export const removeItem = (item_id) => async (dispatch) => {
  const response = await fetch(`/api/cart/items/${item_id}/remove`, {
    method: "DELETE",
    body: JSON.stringify({
      item_id
    })
  })
  if (response.ok) {
    const del_item = await response.json()
    dispatch(remove(del_item))
  }
}

export const clearCart = () => async (dispatch) => {
  dispatch(clear())
}

export const clearAdopted = () => async (dispatch) => {
  dispatch(removeAdopted())
}

const initialState = {}

const cartItemReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_CART_ITEMS:
      const cart_items = {}
      action.items['items'].forEach(item => {
        cart_items[item['id']] = item
      });
      return {...state, ...cart_items}
    case ADD_CART_ITEM:
      return {...state, [action.item['id']]: action.item};
    case REMOVE_CART_ITEM:
      const newState = {...state}
      delete newState[action.item['id']]
      return newState
    case REMOVE_ADOPTED:
      const noAdoptedState = {...state}
      for (let itemKey in noAdoptedState) {
        console.log(noAdoptedState[itemKey].cat.adopted)
        if (noAdoptedState[itemKey].cat.adopted === true) {
          delete noAdoptedState[itemKey]
        }
      }
      return noAdoptedState
    case CLEAR_CART:
      const clearState = {}
      return clearState
    default:
      return state;
  }
}

export default cartItemReducer;
