import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { withPageAuth } from '@supabase/auth-helpers-nextjs'
import Nav from '../components/Nav'

export default function Home({user}) {
  const [data, setData] = useState()

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from('Kategori').select('*')
      setData(data)
    }
    loadData()
  }, [])

  return (
    <>
      <Nav />
      
      <p>client-side data fetching with RLS</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/signin' })