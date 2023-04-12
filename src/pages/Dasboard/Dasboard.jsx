import Cards from '../../components/Cards/Cards.jsx'
import style from './dasboard.module.css'
import toast, { Toaster } from 'react-hot-toast'

function Dashboard () {
  return (
    <div className={style.container}>
      <Toaster />
      <Cards />
    </div>
  )
}

export default Dashboard
