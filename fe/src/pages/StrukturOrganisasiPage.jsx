/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { fetchTahunPeriode, fetchStrukturByYear } from '../api/dummystruktur';
import AnggotaCard from '../components/AnggotaCard';

const StrukturOrganisasiPage = () => {
  const [tahunList, setTahunList] = useState([]);
  const [selectedTahun, setSelectedTahun] = useState(null);
  const [anggota, setAnggota] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTahunList = async () => {
      try {
        const result = await fetchTahunPeriode();
        setTahunList(result.data);
        if (result.data.length > 0) {
          setSelectedTahun(result.data[0].tahun);
        } else {
          setLoading(false);
        }
      } catch (err) {
        setError('Gagal mengambil daftar tahun.');
        setLoading(false);
      }
    };
    getTahunList();
  }, []);

  useEffect(() => {
    if (selectedTahun) {
      setLoading(true);
      const getAnggotaByYear = async () => {
        try {
          const result = await fetchStrukturByYear(selectedTahun);
          setAnggota(result.data);
        } catch (err) {
          setError('Gagal mengambil data anggota.');
        } finally {
          setLoading(false);
        }
      };
      getAnggotaByYear();
    }
  }, [selectedTahun]);

  // Fungsi untuk kelompok berdasarkan jabatan
  const getByJabatan = jabatan => anggota.find(a => a.jabatan === jabatan);
  const getAllByJabatan = jabatan => anggota.filter(a => a.jabatan === jabatan);

  return (
    <div className="bg-gray-50 py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Struktur Organisasi</h1>
          {selectedTahun && <p className="text-gray-500 mt-2">Periode {selectedTahun}</p>}
        </div>

        {/* Dropdown Tahun */}
        <div className="flex justify-center mb-12">
          <select
            value={selectedTahun}
            onChange={(e) => setSelectedTahun(parseInt(e.target.value))}
            className="px-6 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            {tahunList.map(item => (
              <option key={item.id} value={item.tahun}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* Konten Struktur */}
        {loading && <p className="text-center text-gray-500">Loading anggota...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="space-y-12">
            {/* Ketua */}
            <div className="flex justify-center">
              {getByJabatan('Ketua Umum') && <AnggotaCard {...getByJabatan('Ketua Umum')} />}
            </div>

            {/* Wakil */}
            <div className="flex justify-center">
              {getByJabatan('Wakil Ketua') && <AnggotaCard {...getByJabatan('Wakil Ketua')} />}
            </div>

            {/* Sekretaris, Bendahara, Media, Humas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              {['Sekretaris', 'Bendahara', 'Divisi Media', 'Divisi Humas'].map(j => (
                getByJabatan(j) && <AnggotaCard key={j} {...getByJabatan(j)} />
              ))}
            </div>

            {/* Koordinator */}
            <div className="flex justify-center">
              {getByJabatan('Koordinator') && <AnggotaCard {...getByJabatan('Koordinator')} />}
            </div>

            {/* FE, BE, UI/UX */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              {['Frontend Developer', 'Backend Developer', 'UI/UX Designer'].map(j => (
                getByJabatan(j) && <AnggotaCard key={j} {...getByJabatan(j)} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrukturOrganisasiPage;
