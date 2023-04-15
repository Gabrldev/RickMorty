import { Outlet, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import { useEffect } from 'react'
import { supabase } from '../client/client'

const ProtectedRoute = ({ children }) => {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      switch (session) {
        case null:
          navigate('/')
          break
        default:
          break
      }
    })
  }, [])
  const navigate = useNavigate()
  return (
    <div>
      {children || (
        <>
          <Nav />
          <Outlet />
        </>
      )}
    </div>
  )
}

export default ProtectedRoute
