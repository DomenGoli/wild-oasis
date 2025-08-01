import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://fluxcwouorfsotwzorrh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdXhjd291b3Jmc290d3pvcnJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTQ1MTgsImV4cCI6MjA2MzA3MDUxOH0.vhCd2t_1VcIG1ZvyKMhT_cbI-PBdSe4ICdZDCdcyeRA"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase