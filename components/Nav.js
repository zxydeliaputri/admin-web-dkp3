import React from 'react'
import { supabaseClient, withPageAuth } from "@supabase/auth-helpers-nextjs"
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../public/logotasik.jpg"

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
          <a className="navbar-brand text-white" href="#">
            <Image
              src={Logo}
              width={35}
              height={35}
              priority
            />
          </a>
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
              <Link href="/produk">
                <a className="nav-link">PRODUK</a>
              </Link>
              <Link href="/berita">
                <a className="nav-link">BERITA</a>
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