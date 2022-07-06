import { useEffect } from 'react'

function RippleButton({ isLoading, label }) {
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

  return (
    <div className='submitButtonContainer'>
      <button
        className='button buttonTheme ripple-button'
        type='submit'
        disabled={isLoading}
        id='ripple-button'
      >
        {label}
      </button>
    </div>
  )
}

export default RippleButton
