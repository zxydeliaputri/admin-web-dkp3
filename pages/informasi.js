import React, { useState, useEffect } from 'react'
import { supabaseClient, withPageAuth } from '@supabase/auth-helpers-nextjs'
import Nav from '../components/Nav'
import Image from 'next/image'

export default function Informasi() {
    const [items, setItems] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const { data, error } = await supabaseClient
            .from('Produk')
            .select()
        setItems(data)
    }

    return (
        <>
            <Nav />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Informasi</h1>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>FOTO</th>
                                        <th>NAMA PRODUK</th>
                                        <th>TANGGAL</th>
                                        <th>HAPUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <Image
                                                        src={item.foto}
                                                        width={100}
                                                        height={100}
                                                        layout="responsive"
                                                        alt="foto"
                                                        priority
                                                    />
                                                </td>
                                                <td>{item.nama}</td>
                                                <td>{item.created_at}</td>
                                                <td>tombol hapus</td>
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