import { NotFoundImage } from '../Assets'
import { notFoundText } from '../constants'
import RippleButton from '../Shared/RippleButton'

function NotFound() {
  return (
    <div className='notFoundContainer'>
      <img src={NotFoundImage} alt='notFound' className='notFoundImage' />
      <div className='notFoundText'>{notFoundText}</div>
      <RippleButton label='Go To Homepage' align='justifyCenter' path='/' />
    </div>
  )
}

export default NotFound
