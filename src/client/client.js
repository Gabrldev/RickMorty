
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uzpmvpjlwmktjtipuxxf.supabase.co'
const supabaseKey = process.env.VITE_VERCEL_ENV
export const supabase = createClient(supabaseUrl, supabaseKey)
