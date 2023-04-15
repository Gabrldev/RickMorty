import { NavLink } from 'react-router-dom'
import style from '../styles/nav.module.css'
import { BiX } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { GoChevronLeft } from 'react-icons/go'
import { useState } from 'react'
import useLogout from '../../hooks/useLogout '
const NavMb = () => {
  const logout = useLogout()
  const [showMenu, setShowMenu] = useState(false)
  const menuClose = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className={showMenu ? style.menuMb : style.menuActive}>
      <BiX className={style.iconClose} onClick={menuClose} />
      <ul>
        <li>
          <NavLink to='/dashboard' className={style.back} onClick={menuClose}>
            <GoChevronLeft />
            Back
          </NavLink>
        </li>
        <li>
          <NavLink to='/favorite' onClick={menuClose} className={style.back}>
            My Favorite
          </NavLink>
        </li>

        <li>
          <button onClick={logout} className={style.back}>
            <FiLogOut />
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default NavMb
