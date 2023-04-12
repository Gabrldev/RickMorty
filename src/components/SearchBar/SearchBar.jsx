import style from '../styles/nav.module.css'
import useSearch from '../../hooks/useSearch'
function SearchBar () {
  const [id, handleChange, handleSubmit] = useSearch()

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={id}
        placeholder='Ingresa el id a buscar'
      />
      <button className={style.button} type='submit'>
        +
      </button>
    </form>
  )
}

export default SearchBar
