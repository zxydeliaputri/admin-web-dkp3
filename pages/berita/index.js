import React, { useState, useEffect } from 'react'
import { supabaseClient, withPageAuth } from '@supabase/auth-helpers-nextjs'
import Nav from '../../components/Nav'
import Image from 'next/image'
import Link from 'next/link'

export default function Berita() {
    const [items, setItems] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const { data, error } = await supabaseClient
            .from('Berita')
            .select()
        setItems(data)
    }

    return (
        <>
            <Nav />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>
                            Berita
                            <Link href="/berita/tambah">
                                <a className='btn btn-success'>Tambah</a>
                            </Link>
                        </h1>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>JUDUL</th>
                                        <th>TANGGAL</th>
                                        <th>UBAH</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{item.id}</td>
                                                <td>{item.judul}</td>
                                                <td>{item.tanggal}</td>
                                                <td>
                                                    <Link href={`/berita/${item.id}`}>
                                                        <a className='btn btn-success'>UBAH</a>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/signin' })