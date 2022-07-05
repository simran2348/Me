import {
  CONTACT_FAILURE,
  CONTACT_RECIEVE,
  CONTACT_REQUEST
} from './ActionTypes'

export const sendMessage = (payload) => async (dispatch) => {
  dispatch({
    type: CONTACT_REQUEST
  })

  try {
    const { name, email, message } = payload

    console.log({ name, email, message })

    dispatch({
      type: CONTACT_RECIEVE
    })
  } catch (error) {
    dispatch({
      type: CONTACT_FAILURE,
      payload: error
    })
  }
}
