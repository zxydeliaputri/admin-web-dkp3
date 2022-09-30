import React, { useState, useEffect } from 'react'
import { supabaseClient, withPageAuth } from '@supabase/auth-helpers-nextjs'
import Nav from '../../components/Nav'
import Image from 'next/image'
import Link from 'next/link'

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
                        <h1>
                            Informasi
                            <Link href="/informasi/tambah">
                                <a className='btn btn-success'>Tambah</a>
                            </Link>
                        </h1>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>FOTO</th>
                                        <th>NAMA PRODUK</th>
                                        <th>TANGGAL</th>
                                        <th>UBAH</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    {item.foto != "-" ? (
                                                        <Image
                                                        src={item.foto}
                                                        width={100}
                                                        height={100}
                                                        layout="responsive"
                                                        alt="foto"
                                                        priority
                                                    />
                                                    ) : "gaada fotonya"}
                                                </td>
                                                <td>{item.nama}</td>
                                                <td>{item.created_at}</td>
                                                <td>tombol ubah</td>
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