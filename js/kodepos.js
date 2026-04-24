// Data dummy daerah dan kode pos
const dataKodePos = [
    { provinsi: "Jawa Timur", kabupaten: "Surabaya", kecamatan: "Gubeng", kode: "60281" },
    { provinsi: "Jawa Timur", kabupaten: "Surabaya", kecamatan: "Sukolilo", kode: "60111" },
    { provinsi: "Jawa Timur", kabupaten: "Sidoarjo", kecamatan: "Waru", kode: "61256" },
    { provinsi: "Jawa Tengah", kabupaten: "Semarang", kecamatan: "Tembalang", kode: "50275" },
    { provinsi: "Jawa Barat", kabupaten: "Bandung", kecamatan: "Coblong", kode: "40132" },
    { provinsi: "DKI Jakarta", kabupaten: "Jakarta Selatan", kecamatan: "Tebet", kode: "12810" }
];

function cariKode() {
    let inputProv = document.getElementById("provinsi").value.toLowerCase();
    let inputKab = document.getElementById("kabupaten").value.toLowerCase();
    let inputKec = document.getElementById("kecamatan").value.toLowerCase();

    let tabelHasil = document.getElementById("tabelHasil");
    let wadahHasil = document.getElementById("hasilPencarian");
    
    // Kosongkan tabel hasil sebelumnya
    tabelHasil.innerHTML = "";

    // Filter data
    let hasilCari = [];
    for (let i = 0; i < dataKodePos.length; i++) {
        let data = dataKodePos[i];
        
        // Pengecekan sederhana: jika input diisi, teks harus cocok. Jika kosong, abaikan filter tersebut.
        let cocokProv = inputProv === "" || data.provinsi.toLowerCase().includes(inputProv);
        let cocokKab = inputKab === "" || data.kabupaten.toLowerCase().includes(inputKab);
        let cocokKec = inputKec === "" || data.kecamatan.toLowerCase().includes(inputKec);

        if (cocokProv && cocokKab && cocokKec) {
            hasilCari.push(data);
        }
    }

    // Jika ada hasil, tampilkan ke tabel
    if (hasilCari.length > 0) {
        for (let j = 0; j < hasilCari.length; j++) {
            let item = hasilCari[j];
            
            let baris = document.createElement("tr");
            baris.innerHTML = `
                <td>${item.provinsi}</td>
                <td>${item.kabupaten}</td>
                <td>${item.kecamatan}</td>
                <td><strong>${item.kode}</strong></td>
            `;
            tabelHasil.appendChild(baris);
        }
    } else {
        // Jika tidak ketemu
        let barisKosong = document.createElement("tr");
        barisKosong.innerHTML = `<td colspan="4" style="text-align: center;">Data tidak ditemukan.</td>`;
        tabelHasil.appendChild(barisKosong);
    }

    // Munculkan wadah tabel
    wadahHasil.style.display = "block";
}