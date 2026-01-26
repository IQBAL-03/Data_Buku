import React from 'react'
import './App.css'

function Header() {
  return (
    <header>
      <h1 id="judul">Data Buku</h1>
      <div className='tambah'>
        <button className="btn-tambah">+ Tambah</button>
      </div>
    </header>
  )
}

function BukuCard({ judul, penerbit, tahun }) {
  return (
    <div className="card">
      <h1 className="judul1">{judul}</h1>
      <p><span>Penerbit: </span>{penerbit}</p>
      <p><span>Tahun Terbit: </span>{tahun}</p>
      <button className="edit">Edit</button>
      <button className="hapus">Hapus</button>
    </div>
  )
}


function App() {
  const buku = [
    { judul: "Neon Genesis Evangelion", penerbit: "M&C", tahun: "1995" },
    { judul: "Look Back", penerbit: "M&C", tahun: "2022" },
    { judul: "Goodbye, Eri", penerbit: "M&C", tahun: "2022" }
  ];
  return (
    <div className="App">
      <Header />
      <main>
        <div className="wrap">
          <div className="container">
            {buku.map(buku => (
              <BukuCard
                judul={buku.judul}
                penerbit={buku.penerbit}
                tahun={buku.tahun}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
