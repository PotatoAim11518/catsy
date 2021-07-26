//ACTIONS
const LOAD_AGES = 'categories/LOAD_AGES'
const LOAD_SIZES = 'categories/LOAD_SIZES'
const LOAD_COATS = 'categories/LOAD_COATS'
const LOAD_BREEDS = 'categories/LOAD_BREEDS'
const LOAD_GENDERS = 'categories/LOAD_GENDER'


//ACTION CREATORS
const loadAges = list => ({
  type: LOAD_AGES,
  list
})

const loadSizes = list => ({
  type: LOAD_SIZES,
  list
})

const loadCoats = list => ({
  type: LOAD_COATS,
  list
})

const loadBreeds = list => ({
  type: LOAD_BREEDS,
  list
})

const loadGenders = list => ({
  type: LOAD_GENDERS,
  list
})

//THUNKS
export const getAges = () => async dispatch => {
  const response = await fetch(`/api/categories/ages`)
  if(response.ok) {
    const list = await response.json();
    dispatch(loadAges(list.ages));
    console.log(list)
  }
}

export const getSizes = () => async dispatch => {
  const response = await fetch(`/api/categories/sizes`)

  if(response.ok) {
    const list = await response.json();
    dispatch(loadSizes(list.sizes));
    // console.log(list)
  }
}

export const getCoats = () => async dispatch => {
  const response = await fetch(`/api/categories/coats`)

  if(response.ok) {
    const list = await response.json();
    dispatch(loadCoats(list.coats));
    // console.log(list)
  }
}

export const getBreeds = () => async dispatch => {
  const response = await fetch(`/api/categories/breeds`)

  if(response.ok) {
    const list = await response.json();
    dispatch(loadBreeds(list.breeds));
    // console.log(list)
  }
}

export const getGenders = () => async dispatch => {
  const response = await fetch(`/api/categories/genders`)

  if(response.ok) {
    const list = await response.json();
    dispatch(loadGenders(list.genders));
    // console.log(list)
  }
}

const intialState = {};
const categoriesReducer = (state = intialState, action) => {
  const newState = {...state}
  switch(action.type) {
    case LOAD_AGES: {
      let agesArray = [];
      action.list.forEach(age => agesArray.push(age.name))
      newState["ages"] = agesArray;
      return newState;
    }
    case LOAD_SIZES: {
      let sizesArray = [];
      action.list.forEach(size => sizesArray.push(size.name))
      newState.sizes = sizesArray;
      return newState;
    }
    case LOAD_COATS: {
      let coatsArray = [];
      action.list.forEach(coat => coatsArray.push(coat.name))
      newState.coats = coatsArray;
      return newState;
    }
    case LOAD_BREEDS: {
      let breedsArray = [];
      action.list.forEach(breed => breedsArray.push(breed.name))
      newState.breeds = breedsArray;
      return newState;
    }
    case LOAD_GENDERS: {
      let gendersArray = [];
      action.list.forEach(gender => gendersArray.push(gender.name))
      newState.genders = gendersArray;
      return newState;
    }
    default:
      return state;
  }
}

export default categoriesReducer;
