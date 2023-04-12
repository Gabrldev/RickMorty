import Loader from '../../components/Loader/Loader'
import style from './detail.module.css'
import useDatail from '../../hooks/useDetail'
export default function Detail () {
  const character = useDatail()

  return (
    <>
      <div className={style.nameBack}>
        <span className={style.span}>{character.name}</span>
      </div>
      <div className={style.container}>
        {character.name
          ? (
            <section className={style.section}>
              <div>
                <img
                  src={character?.image}
                  alt={character.name}
                  className={style.image}
                />
              </div>
              <div className={style.infoCard}>
                <h2 style={{ color: '#00000091' }}>Info</h2>
                <div className={style.boxAl}>
                  <h1 className={style.nameP}>
                    Name: <span>{character.name}</span>
                  </h1>
                </div>
                <div className={style.boxAl2}>
                  <h1 className={style.nameP}>
                    Origin: <span>{character.origin.name}</span>
                  </h1>
                </div>
                <div className={style.boxAl}>
                  <h1 className={style.nameP}>
                    Gender: <span>{character.gender}</span>
                  </h1>
                </div>
                <div className={style.boxAl2}>
                  <h1 className={style.nameP}>
                    Status: <span>{character.status}</span>
                  </h1>
                </div>
              </div>
            </section>
            )
          : (
            <Loader />
            )}
      </div>
    </>
  )
}
