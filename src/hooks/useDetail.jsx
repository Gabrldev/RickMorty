import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { detailCharacters, cleanDetail } from '../redux/actions'

function useDatail () {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(detailCharacters(id))
    return () => {
      dispatch(cleanDetail())
    }
  }, [id])
  const character = useSelector((state) => state.characterDetail)

  return character
}

export default useDatail
