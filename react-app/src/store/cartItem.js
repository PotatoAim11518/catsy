const SET_CART_ITEMS = 'cart/SET_CART_ITEM';
const ADD_CART_ITEM = 'cart/ADD_CART_ITEMS';
const REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM';

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

export const getItems = () => async (dispatch) => {
  const response = await fetch('/api/cart/items');
  const items = await response.json();
  dispatch(setItems(items))
}

export const addItem = (cat_id) => async (dispatch) => {
  const response = await fetch('/api/cart/items/add', {
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
  const response = await fetch('api/cart/items/remove', {
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
    default:
      return state;
  }
}

export default cartItemReducer;
