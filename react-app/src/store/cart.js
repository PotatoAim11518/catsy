const SET_CART = 'cart/SET_CART';
const ADD_CART = 'cart/ADD_CART';
const REMOVE_CART = 'cart/REMOVE_CART';

const setCart = (cart) => ({
  type: SET_CART,
  cart
})

const add = (cart) => ({
  type: ADD_CART,
  cart
})

const remove = (cart) => ({
  type: REMOVE_CART,
  cart
})

export const getCart = () => async (dispatch) => {
  const response = await fetch('/api/cart');
  const cart = await response.json();
  dispatch(setCart(cart))
}

export const addCart = (user_id) => async (dispatch) => {
  const response = await fetch('/api/cart', {
    method: "POST",
    body: JSON.stringify({
      user_id
    }),
  })
  if (response.ok) {
    const cart = await response.json()
    dispatch(add(cart))
    return cart
  }
}

export const removeCart = (user_id) => async (dispatch) => {
  const response = await fetch('/api/cart/empty', {
    method: "DELETE",
    body: JSON.stringify({
      user_id
    })
  })
  if (response.ok) {
    const cart = await response.json()
    dispatch(remove(cart))
  }
}


const initialState = {}

const cartReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_CART:
      let newCart = {}
      newCart[action.cart['id']] = action.cart
      return {...state, ...newCart}
    case ADD_CART:
      return {...state, [action.cart['id']]: action.cart};
    case REMOVE_CART:
      let newState = {...state}
      delete newState[action.cart]
      return newState
    default:
      return state;
  }
}

export default cartReducer;
