import { supabase } from '../client/client'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
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
      const { message } = error
      toast.error(message)
    }
  }
  return handleSubmit
}
export default loginWhithEmail
