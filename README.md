# Tugas Pemrograman Web - TM 6

Mata Kuliah: Pemrograman Web  
Semester: 4

---

## Deskripsi Tugas

Tugas Mandiri ke-6 pada mata kuliah Pemrograman Web. Terdapat dua fitur utama yang dikembangkan menggunakan HTML, CSS, dan JavaScript murni tanpa framework tambahan.

---

## Fitur

### 1. Form Registrasi Mahasiswa

Halaman `index.html` menyediakan formulir registrasi yang terdiri dari empat field: Nama Mahasiswa, NIM, Mata Kuliah, dan Dosen Pengampu.

Fitur utama pada bagian ini adalah sistem rekomendasi nama secara real-time. Ketika pengguna mengetikkan huruf pada field nama, sistem akan memfilter daftar data mahasiswa yang tersedia dan menampilkan daftar rekomendasi yang dapat diklik. Saat salah satu nama dipilih, field NIM akan terisi secara otomatis sesuai data yang terdaftar. Implementasi memanfaatkan event listener `input` pada elemen HTML dan pencarian berbasis substring untuk mencocokkan teks yang diketik dengan data yang ada.

### 2. Pencarian Kode Pos Indonesia

Halaman `kodepos.html` menyediakan antarmuka pencarian kode pos berdasarkan tiga input: Provinsi, Kabupaten/Kota, dan Kecamatan.

Sistem melakukan pencarian dengan mencocokkan setiap input terhadap dataset yang tersedia menggunakan logika filter parsial, artinya pengguna tidak perlu mengisi semua field dan pencarian tetap berjalan selama ada setidaknya satu input yang dimasukkan. Hasil pencarian ditampilkan dalam bentuk tabel yang memuat kolom Provinsi, Kabupaten/Kota, Kecamatan, dan Kode Pos. Apabila tidak ada data yang cocok, sistem menampilkan pesan bahwa data tidak ditemukan.

---

## Struktur Proyek

```
TM-6/
├── index.html          # Halaman form registrasi mahasiswa
├── kodepos.html        # Halaman pencarian kode pos
├── css/
│   └── style.css       # Stylesheet utama untuk kedua halaman
└── js/
    ├── registrasi.js   # Logika autocomplete dan validasi form registrasi
    └── kodepos.js      # Logika pencarian dan filter data kode pos
```

---
