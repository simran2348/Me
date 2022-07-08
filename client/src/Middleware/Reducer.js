import {
  CONTACT_FAILURE,
  CONTACT_RECIEVE,
  CONTACT_REQUEST,
  RESET_CONTACT_STATE
} from './ActionTypes'

const contactInitialState = {
  loading: false,
  success: false,
  error: false
}

export const contactReducer = (state = contactInitialState, action) => {
  const { type } = action

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
        error: true,
        success: false
      }
    case RESET_CONTACT_STATE:
      return {
        ...state,
        loading: false,
        success: false,
        error: false
      }
    default:
      return state
  }
}
