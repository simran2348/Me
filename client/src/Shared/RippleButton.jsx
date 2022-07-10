import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RippleButton({ disabled, label, align, path }) {
  const navigate = useNavigate()
  function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX
    let posY = event.offsetY

    element.style.setProperty('--x', posX + 'px')
    element.style.setProperty('--y', posY + 'px')
  }

  useEffect(() => {
    const rippleButton = document.querySelector('.ripple-button')

    if (rippleButton) {
      rippleButton.addEventListener('click', (e) => {
        mousePositionToCustomProp(e, rippleButton)
        rippleButton.classList.add('pulse')
        rippleButton.addEventListener(
          'animationend',
          () => {
            rippleButton.classList.remove('pulse')
          },
          { once: true }
        )
      })
    }
  })

  const handleClick = () => {
    if (path) {
      navigate(path)
    }
  }

  return (
    <div className={`submitButtonContainer ${align}`}>
      <button
        className='button buttonTheme ripple-button'
        type='submit'
        disabled={disabled}
        id='ripple-button'
        onClick={() => handleClick()}
      >
        {label}
      </button>
    </div>
  )
}

export default RippleButton
