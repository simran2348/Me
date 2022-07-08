import {
  CONTACT_FAILURE,
  CONTACT_RECIEVE,
  CONTACT_REQUEST
} from './ActionTypes'
import axios from 'axios'

export const sendMessage = (payload) => async (dispatch) => {
  dispatch({
    type: CONTACT_REQUEST
  })

  try {
    const { name, email, message } = payload

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({ name, email, message })

    await axios.post('/api/contact/send', body, config)

    dispatch({
      type: CONTACT_RECIEVE
    })
  } catch (error) {
    dispatch({
      type: CONTACT_FAILURE
    })
  }
}
