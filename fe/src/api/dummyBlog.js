// src/api/mockApi.js

// ... (kode mockProjects, fetchProjects, dan fetchProjectBySlug yang sudah ada) ...


// ==================================================================
//               ↓↓↓ DATA DUMMY BARU UNTUK BLOG ↓↓↓
// ==================================================================
const mockPosts = [
  { 
    id: 1, 
    slug: 'berkenalan-dengan-nextjs', 
    title: 'Berkenalan Dengan Next.js Untuk Website Development', 
    category: 'Front-End', 
    image: 'https://i.imgur.com/9QOeU1O.png',
    author: 'Miftah Rachmatullah',
    createdAt: '2025-08-04T12:00:00Z',
    content: `Next.js adalah framework React yang sangat populer karena menawarkan rendering sisi server (SSR), static site generation (SSG), dan fitur routing yang kuat. Dengan mengadopsi Next.js, developer dapat membangun aplikasi web modern yang lebih cepat, SEO-friendly, dan mudah untuk diskalakan.`
  },
  { 
    id: 2, 
    slug: 'memahami-konsep-error-handling', 
    title: 'Memahami Konsep Error Handling di Next.js', 
    category: 'Front-End', 
    image: 'https://i.imgur.com/NTd2yQz.png',
    author: 'Miftah Rachmatullah',
    createdAt: '2025-07-28T10:00:00Z',
    content: `Error handling merupakan bagian penting dalam pengembangan aplikasi karena memastikan pengguna tetap mendapatkan pengalaman terbaik meskipun terjadi kesalahan. Dalam Next.js, kita bisa menangani error dengan cara membuat file khusus seperti \`_error.js\` atau menggunakan boundary component.`
  },
  { 
    id: 3, 
    slug: 'memahami-konsep-dynamic-routes', 
    title: 'Memahami Konsep Dynamic Routes di Next.js', 
    category: 'Front-End', 
    image: 'https://i.imgur.com/BrLWhuf.png',
    author: 'Miftah Rachmatullah',
    createdAt: '2025-07-20T11:00:00Z',
    content: `Dynamic routing memungkinkan developer membuat halaman berdasarkan parameter dinamis seperti ID atau slug. Next.js menyediakan cara mudah untuk membuat file dinamis dengan menggunakan tanda kurung, contohnya \`[id].js\`, sehingga pengelolaan halaman menjadi lebih fleksibel.`
  },
  { 
    id: 4, 
    slug: 'pengenalan-ui-ux', 
    title: 'Pengenalan Dasar Desain UI/UX untuk Pemula', 
    category: 'UI/UX', 
    image: 'https://i.imgur.com/s2OKt5w.png',
    author: 'Miftah Rachmatullah',
    createdAt: '2025-07-15T09:00:00Z',
    content: `Desain UI/UX tidak hanya berfokus pada tampilan visual saja, tetapi juga bagaimana pengguna berinteraksi dengan produk secara menyeluruh. Memahami prinsip-prinsip desain yang baik, seperti konsistensi, hierarki visual, dan umpan balik pengguna, sangat penting untuk menciptakan pengalaman pengguna yang memuaskan.`
  },
  { 
    id: 5, 
    slug: 'mengenal-api-di-nextjs', 
    title: 'Mengenal API Routes di Next.js', 
    category: 'Full-Stack', 
    image: 'https://i.imgur.com/LKJo4ne.png',
    author: 'Miftah Rachmatullah',
    createdAt: '2025-07-10T14:00:00Z',
    content: `API routes di Next.js memungkinkan kita membuat endpoint backend langsung dalam proyek Next.js. Ini sangat cocok untuk proyek kecil hingga menengah karena tidak perlu setup backend terpisah. Endpoint dibuat di folder \`/pages/api\` dan dapat menangani berbagai jenis request.`
  },
  { 
    id: 6, 
    slug: 'responsive-design-tanpa-ribet', 
    title: 'Responsive Design Tanpa Ribet Menggunakan Tailwind CSS', 
    category: 'Front-End', 
    image: 'https://i.imgur.com/AqT9W3f.png',
    author: 'Miftah Rachmatullah',
    createdAt: '2025-07-01T08:00:00Z',
    content: `Dengan Tailwind CSS, kita bisa membuat desain yang responsive tanpa harus menulis media query secara manual. Tailwind menyediakan utility class berbasis breakpoint yang memudahkan pengembang mengatur tampilan untuk berbagai ukuran layar hanya dengan menambahkan beberapa class pada elemen.`
  },
  { 
    id: 7, 
    slug: 'seo-di-framework-modern', 
    title: 'Optimasi SEO di Framework Modern seperti Next.js', 
    category: 'SEO', 
    image: 'https://i.imgur.com/PYwGnp6.png',
    author: 'Miftah Rachmatullah',
    createdAt: '2025-06-24T15:00:00Z',
    content: `Next.js menyediakan kemampuan server-side rendering dan static generation yang memungkinkan konten muncul lebih cepat di mesin pencari. Menggunakan komponen seperti \`next/head\` juga memungkinkan kita menambahkan meta tag penting seperti title, description, dan og:image untuk keperluan SEO.`
  },
  { 
    id: 8, 
    slug: 'state-management-react', 
    title: 'Mengenal State Management di React dan Next.js', 
    category: 'Front-End', 
    image: 'https://i.imgur.com/fSRRtaO.png',
    author: 'Miftah Rachmatullah',
    createdAt: '2025-06-18T13:00:00Z',
    content: `Mengelola state dalam aplikasi React adalah hal yang penting agar data dan tampilan selalu sinkron. Kita bisa menggunakan React Context, Redux, atau solusi ringan seperti Zustand tergantung kompleksitas aplikasi. Next.js juga mendukung pendekatan ini dengan baik.`
  },
  { 
    id: 9, 
    slug: 'deployment-nextjs', 
    title: 'Panduan Deploy Aplikasi Next.js ke Vercel', 
    category: 'DevOps', 
    image: 'https://i.imgur.com/XM6T5Lv.png',
    author: 'Miftah Rachmatullah',
    createdAt: '2025-06-10T12:00:00Z',
    content: `Vercel merupakan platform hosting yang dibuat oleh pembuat Next.js, sehingga proses deployment menjadi sangat mudah dan cepat. Cukup koneksikan repositori GitHub, pilih project, dan semua proses build serta hosting akan otomatis dilakukan oleh Vercel.`
  },
  { 
    id: 10, 
    slug: 'static-vs-ssr', 
    title: 'Perbedaan Antara Static Generation dan Server-Side Rendering', 
    category: 'Front-End', 
    image: 'https://i.imgur.com/MQUU8sl.png',
    author: 'Miftah Rachmatullah',
    createdAt: '2025-06-01T10:00:00Z',
    content: `Static generation merender halaman pada saat build time, menghasilkan performa yang sangat cepat. Sedangkan server-side rendering merender halaman setiap kali ada request masuk. Keduanya memiliki keunggulan masing-masing tergantung pada kebutuhan aplikasi dan skenario penggunaannya.`
  }
];

// Fungsi "fetch palsu" untuk mengambil SEMUA post
export const fetchPosts = () => {
  console.log("Memanggil API palsu (mock) untuk mengambil data blog...");
  
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data blog berhasil diambil dari mock.");
      resolve({
        status: 'success',
        data: mockPosts,
      });
    }, 500);
  });
};

// Fungsi "fetch palsu" untuk mengambil SATU post
export const fetchPostBySlug = (slug) => {
  console.log(`Mencari post dengan slug: ${slug} di data mock...`);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = mockPosts.find(p => p.slug === slug);
      if (post) {
        resolve({
          status: 'success',
          data: post,
        });
      } else {
        reject(new Error('Post not found'));
      }
    }, 300);
  });
};