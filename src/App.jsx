import "./App.css";
import { useState } from "react";

function Header({ onTambah }) {
  return (
    <header>
      <h1 id="judul">Data Buku</h1>
      <div className="tambah">
        <button onClick={onTambah} className="btn-tambah">+ Tambah</button>
      </div>
    </header>
  );
}

function BukuCard({ judul, penerbit, tahun }) {
  return (
    <div className="card">
      <h1 className="judul1">{judul}</h1>
      <p>
        <span>Penerbit: </span>
        {penerbit}
      </p>
      <p>
        <span>Tahun Terbit: </span>
        {tahun}
      </p>
      <button className="edit">Edit</button>
      <button className="hapus">Hapus</button>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  const buku = [
    { judul: "Neon Genesis Evangelion", penerbit: "M&C", tahun: "1995" },
    { judul: "Look Back", penerbit: "M&C", tahun: "2022" },
    { judul: "Goodbye, Eri", penerbit: "M&C", tahun: "2022" }
  ];
  return (
    <div className="App">
      <Header onTambah={() => setShowModal(true)} />
      <main>
        <div className="wrap">
          <div className="container">
            {buku.map((buku, idx) => (
              <BukuCard
                key={idx}
                judul={buku.judul}
                penerbit={buku.penerbit}
                tahun={buku.tahun}
              />
            ))}
          </div>
        </div>

        {showModal && (
          <div className="form">
            <h2>Form Tambah</h2>
            <form>
              <input type="text" name="judul" placeholder="Judul Buku"></input>
              <input type="text" name="penerbit" placeholder="Penerbit Buku"></input>
              <input type="text" name="tahun" id="tahun" placeholder="Tahun Terbit"></input>
            </form>
            <button className="btn-tambah">Simpan</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
