import style from '../styles/card.module.css'
import { Link } from 'react-router-dom'
export default function Card({name, status,image, onClose, id}) {

   const aliveOrDead = () => {
      if (status === 'Alive') {
         return style.alive
      } else if (status === 'Dead') {
         return style.dead
      } else {
         return style.unknown
      }
   }
   return (
      <Link to={`/details/${id}`}>
      <div className={style.container}>
         <button onClick={()=> onClose(id)}  className={style.btn}><i>X</i></button>
         <strong className={style.name}>{name}</strong>
         <div className={style.card}>
         <img src={image} alt={name} className={style.img}/>
         <h2 className={aliveOrDead()}>{status}</h2>
         </div>
         <button  className={style.moreIn}>
            More Info
         </button>
      </div>
      </Link>
   );
}
