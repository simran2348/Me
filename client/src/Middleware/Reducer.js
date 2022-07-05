import {
  CONTACT_FAILURE,
  CONTACT_RECIEVE,
  CONTACT_REQUEST
} from './ActionTypes'

const contactInitialState = {
  loading: false,
  success: false,
  error: {}
}

export const contactReducer = (state = contactInitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CONTACT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case CONTACT_RECIEVE:
      return {
        ...state,
        loading: false,
        success: true
      }
    case CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        success: false
      }
    default:
      return state
  }
}