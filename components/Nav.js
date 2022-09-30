import React from 'react'
import { supabaseClient, withPageAuth } from "@supabase/auth-helpers-nextjs"
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Nav() {
  const router = useRouter()
  const signOut = () => {
    supabaseClient.auth.signOut()
    router.push('/signin')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">+_-DKP-_+</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">HOME</a>
                </Link>
              </li>
              <Link href="/informasi">
                <a className="nav-link">INFORMASI</a>
              </Link>
              <Link href="/blog">
                <a className="nav-link">BLOG</a>
              </Link>
              <li className="nav-item">
                <a className="nav-link" onClick={signOut}>Sign Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/signin' })