
import sekolah from '../assets/images/sekolah.png';
import sidik from '../assets/images/sidik.png';
import tambol from '../assets/images/tambol.svg';
import kanker_payudara from '../assets/images/kanker_payudara.png';
import rencana from '../assets/images/rencana.png';
import studi1 from '../assets/images/studi1.png';
import kasir from '../assets/images/kasir.png';
import sister from '../assets/images/sister.png';
import puskesmas from '../assets/images/puskesmas.png';

const projectData = [
    {
        title: "Learning Management System",
        description:
            "Sistem pembelajaran daring yang mencakup fitur manajemen absensi siswa, pengelolaan tugas, penyampaian materi pembelajaran, dan sistem ujian online. Dilengkapi dengan dashboard untuk guru dan siswa.",
        image: sekolah,
        techStack: [
            {
                name: "JavaScript",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            },
            {
                name: "Laravel",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg"
            },
            {
                name: "Tailwind",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
            },
            {
                name: "MySQL",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
            }
        ],
        repoLink: "https://github.com/abdulrahemfaqih/sistem-sekolah-terintegrasi",
        isPrivate: false
    },
    {
        title: "Tambal Ban Online",
        description:
            "Platform aplikasi yang menghubungkan pengguna dengan layanan tambal ban terdekat. Dilengkapi dengan fitur tracking pekerja melalui peta, manajemen keuangan pekerja, dan sistem pembayaran terintegrasi untuk memudahkan transaksi dan monitoring layanan.",
        image: tambol,
        techStack: [
            {
                name: "Laravel",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg"
            },
            {
                name: "MySQL",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
            },
            {
                name: "Tailwind",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
            },
        ],
        repoLink: "https://github.com/abdulrahemfaqih/onban-app",
        isPrivate: false
    },
    {
        title: "Sitem Indikator Kinerja - SIDIK",
        description:
            "Sistem rekap dan evaluasi indikator kinerja dosen yang mencakup publikasi, penelitian, pengabdian masyarakat, dan aktivitas akademik lainnya. Dilengkapi dengan dashboard analitik dan pelaporan terperinci untuk memudahkan monitoring dan penilaian kinerja.",
        image: sidik,
        techStack: [
            {
                name: "Codeigniter",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/codeigniter/codeigniter-plain.svg"
            },
            {
                name: "MySQL",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
            },
            {
                name: "Bootstrap",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
            }
        ],
        repoLink: "https://github.com/yourusername/project2",
        isPrivate: true
    },
    {
        title: "Sistem Klasidikasi Kanker Payudara",
        description: "Sistem klasifikasi kanker payudara menggunakan model machine learning ANN, Logistic Regression, dan SVM untuk menentukan jenis kanker payudara berdasarkan data karakteristik sel. Dilengkapi dengan visualisasi data dan perbandingan performa model.",
        image: kanker_payudara,
        techStack: [
            {
                name: "Python",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            },
            {
                name: "Streamlit",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/streamlit/streamlit-plain.svg"
            },
        ],
        repoLink: "https://github.com/abdulrahemfaqih/klasifikasi-kanker-payudara",
        isPrivate: false
    },
    {
        title: "Sistem Informasi Puskesmas",
        description:
            "Sistem informasi puskesmas terintegrasi yang mencakup manajemen pasien, pencatatan medis, pengelolaan apotek, administrasi keuangan, dan pelaporan. Dilengkapi dengan fitur antrian online, rekam medis elektronik, inventaris obat, dan sistem pembayaran untuk meningkatkan efisiensi operasional puskesmas.",
        image: puskesmas,
        techStack: [
            {
                name: "PHP",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
            },
            {
                name: "MySQL",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
            },
            {
                name: "Bootstrap",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
            }
        ],
        repoLink: "https://github.com/yourusername/project2",
        isPrivate: true
    },
    {
        title: "Sistem Rencana Studi",
        description:
            "Sistem Rencana Studi yang memungkinkan mahasiswa merencanakan dan mengelola studi dari semester 1-8. Fitur utama mencakup perencanaan mata kuliah per semester, penetapan target nilai, analisis beban SKS, dan tracking pencapaian akademik. Dilengkapi dengan visualisasi progres dan rekomendasi mata kuliah berdasarkan prasyarat.",
        image: rencana,
        techStack: [
            {
                name: "PHP",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
            },
            {
                name: "MySQL",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
            },
            {
                name: "Bootstrap",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
            }
        ],
        repoLink: "https://github.com/abdulrahemfaqih/rencana-studi",
        isPrivate: false
    },

    {
        title: "Sistem Cuti Akademik",
        description:
            "Sistem manajemen pengajuan cuti akademik mahasiswa yang menyederhanakan proses administrasi. Dilengkapi dengan fitur pengajuan online, tracking status permohonan, notifikasi otomatis, dan dashboard untuk pengelolaan data cuti. Memudahkan koordinasi antara mahasiswa, dosen wali, dan bagian akademik.",
        image: studi1,
        techStack: [
            {
                name: "React",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            },
            {
                name: "Firebase",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
            },
            {
                name: "Tailwind",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
            }
        ],
        repoLink: "https://github.com/abdulrahemfaqih/Sistem-Informasi-Cuti-Akademik",
        isPrivate: false
    },
    {
        title: "Microservice Sistem Cuti Akademik",
        description:
            "Implementasi sistem cuti akademik berbasis microservice dengan arsitektur terdistribusi. Menggunakan Flask untuk backend service, Redis untuk caching dan message broker, Docker untuk kontainerisasi, dan MySQL untuk penyimpanan data. Sistem ini memisahkan layanan menjadi beberapa service independen seperti auth service, notification service, dan core service untuk meningkatkan skalabilitas dan maintainability.",
        image: sister,
        techStack: [
            {
                name: "Flask",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg"
            },
            {
                name: "Tailwind",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
            },
            {
                name: "MySQL",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
            },
            {
                name: "Docker",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
            },
            {
                name: "Redis",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg"
            },
        ],
        repoLink: "https://github.com/abdulrahemfaqih/sicutiv2",
        isPrivate: false
    },
    {
        title: "Sistem Kasir Toko",
        description: "Aplikasi point of sale (POS) untuk manajemen toko yang mencakup fitur transaksi penjualan, inventaris barang, laporan keuangan, dan manajemen pelanggan. Dilengkapi dengan sistem barcode, perhitungan otomatis, dan pencetakan struk untuk memudahkan operasional kasir",
        image: kasir,
        techStack: [
            {
                name: "PHP",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
            },
            {
                name: "MySQL",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
            },
            {
                name: "Bootstrap",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
            }
        ],
        repoLink: "https://github.com/abdulrahemfaqih/pengembangan-aplikasi-web",
        isPrivate: false
    }
];

export default projectData;