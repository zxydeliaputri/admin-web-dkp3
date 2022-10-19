import { supabaseClient, withPageAuth } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { convertFromRaw, convertToRaw } from "draft-js";
import { useRouter } from "next/router";

const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), { ssr: false });

export default function Tambah() {
  const [judul, setJudul] = useState();
  const [isi, setIsi] = useState();
  const [ubahUudul, setUbahJudul] = useState();
  const [ubahIsi, setUbahIsi] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const { data, error } = await supabaseClient.from("Berita").select().eq("id", id);
    setJudul(data[0].judul);
    setIsi(data[0].deskripsi);
  };

  const judulStateChange = (event) => {
    setUbahJudul(event.target.value);
  };

  const isiStateChange = (event) => {
    setUbahIsi(event);
  };

  const onSubmit = async () => {
    const { data, error } = await supabaseClient.from("Berita").update({ judul: ubahJudul, deskripsi: ubahIsi });
  };

  return (
    <>
      <Nav />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>
                Berita - Ubah
                <Link href="/berita">
                  <a className="btn btn-danger ms-2">Kembali</a>
                </Link>
              </h3>
            </div>
            <div className="col text-muted">
              <h3>{judul}</h3>
              <p>{isi}</p>
            </div>
            <div className="com-md-6">
              <form onSubmit={onSubmit}>
                <input type="text" onChange={judulStateChange} placeholder="Tulis Judul Berita..." className="form-control form-control-lg mb-3" />
                {/* <input
                                type="file"
                                accept="image/*"
                                onChange={fotoStateChange}
                            /> */}
                <textarea className="form-control" onChange={isiStateChange} rows="7"></textarea>
                <button type="submit" className="btn btn-success">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });
