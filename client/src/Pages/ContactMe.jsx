import { useState } from 'react'
import TextInput from '../Shared/TextInput'
import { sendMessage } from '../Middleware/Actions'
import { connect } from 'react-redux'

function ContactMe({ sendMessage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    sendMessage(formData)
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  const { name, email, message } = formData
  return (
    <div className='contactContainer'>
      <div className='title'>
        Let's <span className='themeText'>Talk</span>
      </div>
      <div className='subText'>
        Have a job opportunity or want to talk, contact me directly and fill out
        the form, and i will get back to you soon.
      </div>
      <form onSubmit={onSubmit} className='contactForm'>
        <TextInput
          type='text'
          value={name}
          name='name'
          onChange={(e) => onChange(e)}
          className=''
          label='Your Name'
          labelClass=''
        />
        <TextInput
          type='email'
          value={email}
          name='email'
          onChange={(e) => onChange(e)}
          className=''
          label='Your Email'
          labelClass=''
        />
        <TextInput
          value={message}
          name='message'
          onChange={(e) => onChange(e)}
          className=''
          label='Your Message'
          labelClass=''
          placeholder='Type your message here...'
          textarea
        />
        <div className='submitButtonContainer'>
          <button className='button buttonTheme' type='submit'>
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  )
}

export default connect(null, { sendMessage })(ContactMe)
