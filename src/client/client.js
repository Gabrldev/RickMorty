
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uzpmvpjlwmktjtipuxxf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6cG12cGpsd21rdGp0aXB1eHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5MTgwNTIsImV4cCI6MTk5NjQ5NDA1Mn0.3It7FOK-lEE3CQ4TzfPxE3cXxDBGOCBUVnzqHggZCuA'
export const supabase = createClient(supabaseUrl, supabaseKey)
