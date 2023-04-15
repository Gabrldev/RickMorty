import { Link } from 'react-router-dom'
import style from '../style.module.css'

const LinkBtn = ({ nama, to }) => {
  return (
    <Link to={to} className={style.btn}>
      <button>{nama}</button>
    </Link>
  )
}
export default LinkBtn
