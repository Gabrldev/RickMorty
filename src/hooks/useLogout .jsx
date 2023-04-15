import { supabase } from '../client/client'
import { useNavigate } from 'react-router-dom'

function useLogout () {
  const navigate = useNavigate()
  async function logout () {
    await supabase.auth.signOut()
    navigate('/')
  }
  return logout
}
export default useLogout
