import React from 'react'

export const initialState = {
  page: 1,
  name: '',
  email: '',
  password: '',
  city: '',
  pincode: ''
}

function Reducervalue(state, action) {
  switch (action.type) {
    case ('Ubdate_Data'):
      return ({ ...state, [action.name]: action.value })
    case ('Next_Page'):
      return ({ ...state, page: state.page + 1 })
    case ('Prev_Page'):
      return ({ ...state, page: state.page - 1 })
    case ('Reset'):
      return initialState
    default: 
    return state

  }
}
export default Reducervalue