import style from './styles/card.module.css'
export default function Card({name, status, species,gender, image, onClose, id}) {

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

      <div className={style.container}>
         <button onClick={()=> onClose(id)}  className={style.btn}><i>X</i></button>
         <h2>{name}</h2>
         <div className={style.card}>
         <img src={image} alt={name} className={style.img}/>
         <h2 className={aliveOrDead()}>{status}</h2>
         </div>
      </div>
   );
}
