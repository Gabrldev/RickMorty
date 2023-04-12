import { supabase } from '../client/client'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function checkLogin () {
  function check () {
    const navigate = useNavigate()
    useEffect(() => {
      console.log('checkLogin');
      supabase.auth.onAuthStateChange((event, session) => {
        if (session) {
          navigate('/dashboard')
        }
      })
    }, [])
  }
  return check
}
export default checkLogin
