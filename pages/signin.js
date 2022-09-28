import { Auth } from '@supabase/ui'
import { useUser } from '@supabase/auth-helpers-react'
import React from 'react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/router'

function SignIn() {
  const { user, error } = useUser()
  const router = useRouter()
  if(user) {
    router.push('/')
  }
  return (
    <>
      {error && <p>{error.message}</p>}

      {!user ? (
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <Auth
                supabaseClient={supabaseClient}
                socialLayout="horizontal"
                socialButtonSize="xlarge"
              />
            </div>
          </div>
        </div>
      ) : true}

    </>
  )
}

export default SignIn