// data dummy mahasiswa
const dataMahasiswa = [
    { nama: "Budi Santoso", nim: "240001" },
    { nama: "Siti Aminah", nim: "240002" },
    { nama: "Andi Saputra", nim: "240003" },
    { nama: "Rina Wijaya", nim: "240004" },
    { nama: "Bambang Pamungkas", nim: "240005" },
    { nama: "Ayu Lestari", nim: "240006" },
    { nama: "Reza Rahardian", nim: "240007" }
];

const inputNama = document.getElementById("nama");
const inputNim = document.getElementById("nim");
const kotakRekomendasi = document.getElementById("kotakRekomendasi");

// event saat pengguna mengetik di input nama
inputNama.addEventListener("input", function() {
    let teksKetikan = inputNama.value.toLowerCase();
    
    // kosongkan rekomendasi sebelumnya
    kotakRekomendasi.innerHTML = "";
    inputNim.value = ""; // reset nim jika nama berubah

    if (teksKetikan === "") {
        return; // jangan tampilkan apa-apa jika kosong
    }

    // filter data yang cocok
    let hasilCari = dataMahasiswa.filter(function(mhs) {
        return mhs.nama.toLowerCase().includes(teksKetikan);
    });

    // tampilkan hasil pencarian
    for (let i = 0; i < hasilCari.length; i++) {
        let mhs = hasilCari[i];
        
        let elemenLi = document.createElement("li");
        elemenLi.textContent = mhs.nama;
        
        // kalau nama di klik
        elemenLi.addEventListener("click", function() {
            inputNama.value = mhs.nama;
            inputNim.value = mhs.nim;
            kotakRekomendasi.innerHTML = ""; // tutup kotak rekomendasi
        });

        kotakRekomendasi.appendChild(elemenLi);
    }
});