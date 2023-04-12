import { supabase } from '../client/client'
import { useNavigate } from 'react-router-dom'
function loginWhithEmail (formData) {
  const navigate = useNavigate()
  async function handleSubmit (e) {
    e.preventDefault()

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      })

      if (error) throw error
      navigate('/dashboard')
    } catch (error) {
      // eslint-disable-next-line no-undef
      alert(error.message)
    }
  }
  return handleSubmit
}
export default loginWhithEmail
