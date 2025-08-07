// src/api/service.js

const BASE_URL = 'http://localhost:8080/api/v1'; // URL API backend asli Anda

// Fungsi untuk menangani respons dan error
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(errorData.message || 'Terjadi kesalahan pada server');
  }
  return response.json();
};

// --- Kumpulan Fungsi untuk Fetch ke API Asli ---

export const fetchProjects = async () => {
  const response = await fetch(`${BASE_URL}/projects`);
  const result = await handleResponse(response);
  return result; // Diharapkan mengembalikan { status: '...', data: [...] }
};

export const fetchProjectBySlug = async (slug) => {
  const response = await fetch(`${BASE_URL}/projects/${slug}`);
  const result = await handleResponse(response);
  return result;
};

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  const result = await handleResponse(response);
  return result;
};

export const fetchPostBySlug = async (slug) => {
  const response = await fetch(`${BASE_URL}/posts/${slug}`);
  const result = await handleResponse(response);
  return result;
};

export const fetchTahunPeriode = async () => {
  const response = await fetch(`${BASE_URL}/tahun-periode`);
  const result = await handleResponse(response);
  return result;
};

export const fetchStrukturByYear = async (year) => {
  const response = await fetch(`${BASE_URL}/struktur?year=${year}`);
  const result = await handleResponse(response);
  return result;
};