// src/api/mockApi.js

const mockProjects = [
  {
    id: 1,
    title: 'Wisata Bahari Makassar Website Design',
    slug: 'wisata-bahari-makassar',
    photos: [
      'https://i.imgur.com/VfYk2sJ.png',
      'https://i.imgur.com/nS4jLhk.png',
      'https://i.imgur.com/YtQmDZM.png',
    ],
    category: 'Website',
    description: `
Desain UI/UX modern untuk website pariwisata bahari Makassar. Fokus pada pengalaman pengguna yang informatif dan menarik.

- Responsive Design  
- Auto Layout in Figma  
- Coastal Theme UI  
- SEO Ready  
- Interactive Map
    `,
    createdAt: '2024-08-01T10:00:00Z',
  },
  {
    id: 2,
    title: 'Build E-Commerce Design Mobile App',
    slug: 'build-e-commerce-design',
    photos: [
      'https://i.imgur.com/jDnVmve.png',
      'https://i.imgur.com/VF1NLKM.png',
      'https://i.imgur.com/TcexUw6.png',
    ],
    category: 'Mobile App',
    description: `
Aplikasi e-commerce dengan fitur cart, wishlist, dan checkout. Dirancang untuk pengalaman belanja yang cepat dan mudah.

- Clean Shopping Flow  
- Payment Gateway Ready  
- Dark Mode Supported  
- Product Filtering  
- Minimalist Style
    `,
    createdAt: '2024-07-25T14:30:00Z',
  },
  {
    id: 3,
    title: 'Company Profile for ADCOM',
    slug: 'company-profile-adcom',
    photos: [
      'https://i.imgur.com/3wplRKy.png',
      'https://i.imgur.com/yfOglaZ.png',
      'https://i.imgur.com/UtRjdd6.png',
    ],
    category: 'Website',
    description: `
Website company profile modern untuk perusahaan digital marketing ADCOM. Tampilan profesional dan elegan.

- Corporate Theme  
- Accessible UI  
- Responsive Design  
- CMS Ready  
- SEO Optimization
    `,
    createdAt: '2024-07-15T09:00:00Z',
  },
  {
    id: 4,
    title: 'Smart City Dashboard Concept',
    slug: 'smart-city-dashboard',
    photos: [
      'https://i.imgur.com/GxFvIbT.png',
      'https://i.imgur.com/MdcB7u1.png',
      'https://i.imgur.com/OvTz8Xw.png',
    ],
    category: 'Dashboard',
    description: `
Konsep dashboard untuk sistem kota pintar dengan visualisasi data lalu lintas, lingkungan, dan layanan publik.

- Real-Time Charts  
- Admin View  
- Dark Mode  
- Grid-Based Layout  
- Built in Figma
    `,
    createdAt: '2024-07-10T11:00:00Z',
  },
  {
    id: 5,
    title: 'Restaurant Menu App UI',
    slug: 'restaurant-menu-app',
    photos: [
      'https://i.imgur.com/w1b5UQ3.png',
      'https://i.imgur.com/KXmWR3g.png',
      'https://i.imgur.com/I0GJXsL.png',
    ],
    category: 'Mobile App',
    description: `
Desain aplikasi menu digital untuk restoran dengan QR scan dan sistem pemesanan meja.

- QR Code Integration  
- Category Navigation  
- Multilingual Support  
- Flat Icons  
- Designed in Figma
    `,
    createdAt: '2024-07-02T08:00:00Z',
  },
  {
    id: 6,
    title: 'Desa Digital Admin Dashboard',
    slug: 'desa-digital-dashboard',
    photos: [
      'https://i.imgur.com/8cGrTko.png',
      'https://i.imgur.com/XOPmsUJ.png',
      'https://i.imgur.com/jFzNVEd.png',
    ],
    category: 'Dashboard',
    description: `
Dashboard pengelolaan data desa digital: penduduk, surat, bantuan, dan statistik wilayah.

- CRUD Data Penduduk  
- Export Laporan  
- Modular Component  
- Responsive Layout  
- Role Management
    `,
    createdAt: '2024-06-25T12:45:00Z',
  },
  {
    id: 7,
    title: 'Landing Page Startup Fintech',
    slug: 'landing-startup-fintech',
    photos: [
      'https://i.imgur.com/B5sLFEK.png',
      'https://i.imgur.com/xUAVSOZ.png',
      'https://i.imgur.com/ae8ZHMe.png',
    ],
    category: 'Website',
    description: `
Landing page untuk startup fintech dengan fokus konversi tinggi dan desain trust-focused.

- Call-to-Action Sections  
- Testimonial Carousel  
- Trust Badge Elements  
- Gradient Header  
- Fast Load Optimized
    `,
    createdAt: '2024-06-15T16:30:00Z',
  },
  {
    id: 8,
    title: 'Portfolio UI Designer',
    slug: 'portfolio-ui-designer',
    photos: [
      'https://i.imgur.com/tcbDoDx.png',
      'https://i.imgur.com/RALSwdo.png',
      'https://i.imgur.com/7Pb3mSV.png',
    ],
    category: 'Website',
    description: `
Template portfolio personal untuk UI/UX designer dengan layout grid gallery dan dark/light toggle.

- Case Study Sections  
- Animated Scroll  
- CV Download Feature  
- Dribbble Integration  
- Custom Domain Ready
    `,
    createdAt: '2024-06-01T09:00:00Z',
  },
  {
    id: 9,
    title: 'Healthcare Booking App',
    slug: 'healthcare-booking-app',
    photos: [
      'https://i.imgur.com/37I0JEl.png',
      'https://i.imgur.com/zOD4OOU.png',
      'https://i.imgur.com/tkGvEDE.png',
    ],
    category: 'Mobile App',
    description: `
Aplikasi pemesanan layanan kesehatan dengan fitur dokter, jadwal, dan video call langsung.

- Doctor Profile Page  
- Booking Calendar  
- Emergency Call  
- Reusable Components  
- Smooth UX
    `,
    createdAt: '2024-05-25T14:00:00Z',
  },
  {
    id: 10,
    title: 'Dashboard Monitoring Keuangan',
    slug: 'dashboard-keuangan',
    photos: [
      'https://i.imgur.com/CN7OTFA.png',
      'https://i.imgur.com/1YpWRKw.png',
      'https://i.imgur.com/qPHqUCU.png',
    ],
    category: 'Dashboard',
    description: `
Dashboard keuangan untuk laporan harian, bulanan, dan tahunan. Dilengkapi grafik interaktif.

- ChartJS Integration  
- Filter Date Range  
- Export PDF  
- Excel Import  
- Role Access Panel
    `,
    createdAt: '2024-05-10T07:30:00Z',
  },
  {
    id: 11,
    title: 'Sistem Informasi Akademik UI',
    slug: 'sia-ui-design',
    photos: [
      'https://i.imgur.com/tpAqGgL.png',
      'https://i.imgur.com/yXJYZvE.png',
      'https://i.imgur.com/MjJ5dyP.png',
    ],
    category: 'Dashboard',
    description: `
UI sistem informasi akademik: jadwal kuliah, KRS, nilai, kehadiran. Fokus pada kemudahan akses mahasiswa.

- Jadwal Mingguan  
- Notifikasi Otomatis  
- Input Nilai  
- Dropdown Smart Search  
- Mobile Friendly
    `,
    createdAt: '2024-04-20T10:45:00Z',
  },
  {
    id: 12,
    title: 'Aplikasi Donasi UI/UX',
    slug: 'donation-app-ui',
    photos: [
      'https://i.imgur.com/pnRIlaW.png',
      'https://i.imgur.com/FOxuHU8.png',
      'https://i.imgur.com/l3uIYzN.png',
    ],
    category: 'Mobile App',
    description: `
UI/UX untuk aplikasi donasi yang memungkinkan donatur memilih program dan melihat perkembangan donasi.

- Campaign Gallery  
- Payment Integration  
- Donasi Progress Bar  
- Admin Panel Friendly  
- Community Feed
    `,
    createdAt: '2024-04-01T13:00:00Z',
  },
  {
    id: 13,
    title: 'Admin Panel Toko Online',
    slug: 'admin-panel-store',
    photos: [
      'https://i.imgur.com/SLk2XKh.png',
      'https://i.imgur.com/vCBh3tV.png',
      'https://i.imgur.com/o7cQzXx.png',
    ],
    category: 'Dashboard',
    description: `
Panel admin toko online dengan fitur produk, order, pelanggan, dan laporan penjualan.

- Sidebar Navigation  
- Product Management  
- Order Status Colors  
- Monthly Stats  
- User Permissions
    `,
    createdAt: '2024-03-25T17:15:00Z',
  },
  {
    id: 14,
    title: 'Wedding Invitation Website',
    slug: 'wedding-invitation-website',
    photos: [
      'https://i.imgur.com/MkoKKnk.png',
      'https://i.imgur.com/pSMxohH.png',
      'https://i.imgur.com/bm1IFq9.png',
    ],
    category: 'Website',
    description: `
Undangan pernikahan digital modern dengan animasi elegan dan RSVP langsung ke WhatsApp.

- Countdown Timer  
- Guestbook Feature  
- Gallery Grid  
- RSVP Button  
- Music Background
    `,
    createdAt: '2024-03-10T08:00:00Z',
  },
  {
    id: 15,
    title: 'Edu Platform Mobile UI',
    slug: 'edu-platform-ui',
    photos: [
      'https://i.imgur.com/8ABHRNO.png',
      'https://i.imgur.com/l7pUuE5.png',
      'https://i.imgur.com/7gQe4Ac.png',
    ],
    category: 'Mobile App',
    description: `
Desain UI aplikasi edukasi online dengan fitur video course, kuis, dan sertifikat.

- Course Progress Tracking  
- Quiz Page  
- Certificate Generator  
- Login/Register Page  
- Light & Dark Theme
    `,
    createdAt: '2024-02-28T11:00:00Z',
  },
];

export const fetchProjects = () => {
  console.log("Memanggil API palsu (mock) untuk mengambil data proyek...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'success', data: mockProjects });
    }, 500);
  });
};

export const fetchProjectBySlug = (slug) => {
  console.log(`Mencari proyek dengan slug: ${slug} di data mock...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const project = mockProjects.find(p => p.slug === slug);
      if (project) {
        resolve({ status: 'success', data: project });
      } else {
        reject(new Error('Project not found'));
      }
    }, 300);
  });
};
