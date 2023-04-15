import style from '../styles/nav.module.css'
import { useRandom } from '../../utils/random'
export default function GetRandom () {
  const handleClick = useRandom()
  return (
    <button onClick={handleClick} className={style.back}>
      Get Random
    </button>
  )
}
