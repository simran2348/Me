import { AiFillHome } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { FaInfo } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function FabRouter() {
  const location = useLocation()
  const { pathname } = location

  return (
    <div className='fabRouter'>
      <Link
        to={'/'}
        className={`fabIconContainer ${pathname === '/' && 'selected'}`}
      >
        <AiFillHome size={23} className='fabIcon' color='var(--fabIconColor)' />
      </Link>
      <Link
        to={'/contact-me'}
        className={`fabIconContainer ${
          pathname === '/contact-me' && 'selected'
        }`}
      >
        <MdMail size={23} className='fabIcon' color='var(--fabIconColor)' />
      </Link>
      <Link
        to={'/about'}
        className={`fabIconContainer ${pathname === '/about' && 'selected'}`}
      >
        <FaInfo size={23} className='fabIcon' color='var(--fabIconColor)' />
      </Link>
    </div>
  )
}

export default FabRouter
