import { supabase } from '../client/client'
const LoginGoogle = () => {
  async function signInWithGoogle () {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }

  return signInWithGoogle
}
export default LoginGoogle
