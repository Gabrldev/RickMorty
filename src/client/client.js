
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uzpmvpjlwmktjtipuxxf.supabase.co'
const supabaseKey = process.env.KEY_SUPABASE
export const supabase = createClient(supabaseUrl, supabaseKey)
