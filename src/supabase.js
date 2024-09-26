import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xvyldsxxeoxbfwtalsxi.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2eWxkc3h4ZW94YmZ3dGFsc3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczMDc4ODcsImV4cCI6MjA0Mjg4Mzg4N30.s_dSc0JC5RyIWzdyDd-xzX3Mxn4TrKQZm0fFlAWQuUc';

export const supabase = createClient(supabaseUrl, supabaseKey);
