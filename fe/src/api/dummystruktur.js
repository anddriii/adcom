// ==================================================================
//        DATA DUMMY UNTUK STRUKTUR ORGANISASI
// ==================================================================

// Tahun periode bergaya 2023/24, 2024/25, dst.
const mockTahunPeriode = [
  { id: 1, label: '2023/24', tahun: 2023 },
  { id: 2, label: '2024/25', tahun: 2024 },
  { id: 3, label: '2025/26', tahun: 2025 },
];

const mockAnggota = [
  // Periode 2025/26
  {
    id: 1,
    nama: 'Ahmad Budiarto',
    jabatan: 'Penanggung Jawab',
    tahunPeriode: 2023,
    photo: 'https://i.pravatar.cc/150?u=ahmad',
  },
  {
    id: 2,
    nama: 'Citra Lestari',
    jabatan: 'Ketua Umum',
    tahunPeriode: 2023,
    photo: 'https://i.pravatar.cc/150?u=citra',
  },
  {
    id: 3,
    nama: 'Dian Permana',
    jabatan: 'Sekretaris',
    tahunPeriode: 2023,
    photo: 'https://i.pravatar.cc/150?u=dian',
  },
  {
    id: 4,
    nama: 'Eko Santoso',
    jabatan: 'Bendahara',
    tahunPeriode: 2023,
    photo: 'https://i.pravatar.cc/150?u=eko',
  },
  {
    id: 5,
    nama: 'Farah Aulia',
    jabatan: 'Frontend Developer',
    tahunPeriode: 2023,
    photo: 'https://i.pravatar.cc/150?u=farah',
  },
  {
    id: 6,
    nama: 'Galang Wibowo',
    jabatan: 'Backend Developer',
    tahunPeriode: 2023,
    photo: 'https://i.pravatar.cc/150?u=galang',
  },
  {
    id: 7,
    nama: 'Hana Mutiara',
    jabatan: 'UI/UX Designer',
    tahunPeriode: 2023,
    photo: 'https://i.pravatar.cc/150?u=hana',
  },
  {
    id: 8,
    nama: 'Ilham Saputra',
    jabatan: 'Anggota Biasa',
    tahunPeriode: 2023,
    photo: 'https://i.pravatar.cc/150?u=ilham',
  },
  {
    id: 9,
    nama: 'Jihan Rahma',
    jabatan: 'Anggota Biasa',
    tahunPeriode: 2023,
    photo: 'https://i.pravatar.cc/150?u=jihan',
  },
  {
    id: 26,
    nama: 'Rizky Ramadhan',
    jabatan: 'Wakil Ketua',
    tahunPeriode: 2023,
    photo: 'https://i.pravatar.cc/150?u=rizky',
  },
  {
    id: 27,
    nama: 'Salsa Dwi',
    jabatan: 'Divisi Media',
    tahunPeriode: 2023,
    photo: 'https://i.pravatar.cc/150?u=salsa',
  },
  {
    id: 28,
    nama: 'Bayu Prabowo',
    jabatan: 'Divisi Humas',
    tahunPeriode: 2023,
    photo: 'https://i.pravatar.cc/150?u=bayu',
  },

];


// Fungsi mock untuk mengambil daftar tahun
export const fetchTahunPeriode = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ status: 'success', data: mockTahunPeriode });
    }, 200);
  });
};

// Fungsi mock untuk mengambil struktur berdasarkan tahun
export const fetchStrukturByYear = (year) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const filteredAnggota = mockAnggota.filter(a => a.tahunPeriode === year);
      resolve({ status: 'success', data: filteredAnggota });
    }, 400);
  });
};
