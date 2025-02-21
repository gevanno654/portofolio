// Data Translations ID
const translations = {
    en: {
        // Preloader
        "preload-h": "H",
        "preload-e": "e",
        "preload-l1": "l",
        "preload-l2": "l",
        "preload-o": "o",
        "preload-!": "!",

        //Navbar
        "navlink-about": "About Me",
        "navlink-projects": "Projects",
        "navlink-exp&edu": "Experience & Education",
        "navlink-skills&contact": "Skills & Contact",

        //Header
        "name": "I am Gevanno Yohanes",
        "skill-header": "as a Full Stack Web<br>and Mobile Developer",
        "desc-header": "I will always strive to create the best appearance<br class='hide-me'> to establish a unique characteristic.",
        "view-btn-cv": "View My CV",
        "title-modal-cv": "Let's view my CV",
        "download-btn-en": "My CV in English",
        "download-btn-id": "My CV in Bahasa",
        
        //About Me
        "title-about": "About Me",
        "desc-about": "I am an Informatics student at Universitas Pembangunan Nasional Veteran Jawa Timur<br class='hide-me'> with experience in designing and developing websites and mobile applications.<br class='hide-me-on-large-devices'> I have used HTML, CSS, JavaScript, PHP, Java, Kotlin, and Dart.<br class='hide-me'> I am very interested in a Full Stack Web Development and Mobile Apps Development.",
        
        //Projects
        "title-projects": "My Recent Projects",
        "desc-projects": "It's all about what I've created and learned.",

        //Hover Projects

        //Projects 1
        "project1-title": "University Database Website",
        "project1-subtitle": "Campus Projects",

        //Projects 2
        "project2-title": "Restaurant Menu Website",
        "project2-subtitle": "Campus Projects",

        //Projects 3
        "project3-title": "Zynergy (Healthcare API & Android App)",
        "project3-subtitle": "MSIB Projects",

        //Projects 4
        "project4-title": "DSS for Scholarship Desktop App",
        "project4-subtitle": "Campus Projects",

        //Projects 5
        "project5-title": "OBS Deckstream Panel",
        "project5-subtitle": "Church Projects",

        //Projects 6
        "project6-title": "Book E-Commerce Website",
        "project6-subtitle": "MSIB Projects",

        //Modal Projects
        "live-preview": "Live Preview",
        "code-preview": "View Codes",
        "code-api-preview": "View API Codes",
        "code-app-preview": "View App Codes",
        "code-backoffice-preview": "View Backoffice Codes",
        "download-app": "Download Zynergy App",
        "live-preview-backoffice": "Live Preview Backoffice",
        "maintenance": "Sorry, Under Maintenance",

        //Project1
        "title-modal-pro1": "University Database Website",
        "time-modal-pro1": "14th - 21th December 2023",
        "desc-modal-pro1": "A project that implements Advanced Query SQL into a website feature to make it easier for users to search for data.",
        "subtitle-modal-pro1": "What I did in this Project:",
        "myjob-modal-pro1": "• Built with HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL.<br>• Designed database.<br>• Connected database to the website by applying Advanced Query.<br>• Enhanced user experience by optimizing the display, site structure, and navigation.",

        //Project2
        "title-modal-pro2": "Restaurant Menu Website",
        "time-modal-pro2": "23th May 2024 - 12th June 2024",
        "desc-modal-pro2": "A project that develops activities in ordering menus at a restaurant. The goal is to make it easier for customers to order food & drinks.",
        "subtitle-modal-pro2": "What I did in this Project:",
        "myjob-modal-pro2": "• Built website with HTML5, CSS3, PHP, JavaScript, Bootstrap.<br>• Created database design.<br>• Created animation and transition with CSS3 dan JavaScript.<br>• Developed desktop website to responsive website.<br>• Built function from additional item to cart by applying JSON to collect item’s information.<br>• Enhanced user experience by optimizing button function and navigation on the website page.<br>• Imporved the thankyou.php page to automatically display the code based on the order type (dine in or take away).<br>• Created admin page and order history page, including order detail modal.<br>• Created live page on the admin page to view the order code without having to refresh the page. Live page using React.js<br>• Created notification automatically if there is a new order.",

        //Project3
        "title-modal-pro3": "Zynergy<br>(Healthcare API & Android App)",
        "time-modal-pro3": "18th November 2024 - 18th December 2024",
        "desc-modal-pro3": "An Android application project developed based on research conducted by the 2getHer group in response to the issue of Generation Z's unhealthy lifestyle patterns. This application aims to help support Generation Z in maintaining a healthy lifestyle by reminding users to stay on track, including reminders for meals, sleep, waking up, exercise/light activities, and health check-ups. It features personalization options that users can customize directly, along with recommended reminder schedules, special reminder schedules, meal recommendations, and article recommendations.",
        "subtitle-modal-pro3": "What I did in this Project:",
        "myjob-modal-pro3": "• Designing the flow of the application's main features.<br>• Designed the database structure using MySQL.<br>• Developed 3 reminder features on the API using Laravel 10.<br>• Deployment of Back-Office and API on hosting.<br>• Developed the appearance and all features (push notification, randomize food menu, randomize article recommendation, personalization, login & register, forgot password) of the application using Flutter.<br>• Connecting Google OAuth to the application with Google Cloud Console.<br>• Connecting the API with the application.<br>• Performing steps to release the application in Flutter.",

        //Project4
        "title-modal-pro4": "Decision Support System<br>for Scholarship Desktop App",
        "time-modal-pro4": "23th May 2024 - 12th June 2024",
        "desc-modal-pro4": "A project that develops the calculation of the Simple Additive Weighting method<br>to assist a scholarship committee in determining the eligibility of students who get scholarships.",
        "subtitle-modal-pro4": "What I did in this Project:",
        "myjob-modal-pro4": "• Created database design.<br>• Created interface desktop app with menggunakan Java Swing.<br>• Connected desktop app to database with Java JDBC Driver.<br>• Created user authentication, database management, and data validation.<br>• Created DSS calculation feature by applying SAW method calculation.<br>• Enhanced user experience by optimizing button function, display, structure, and navigation on the website page.",

        //Project5
        "title-modal-pro5": "OBS Deckstream Panel",
        "time-modal-pro5": "1st July 2024 - 26th July 2024",
        "desc-modal-pro5": "A project that develops a websocket connection with a broadcasting application called OBS Studio. This project aims to make it easier for users to operate OBS Studio and can be run on multiple platforms (desktop and mobile).",
        "subtitle-modal-pro5": "What I did in this Project:",
        "myjob-modal-pro5": "• Created concepts for application functions.<br>• Created user interface and user experience.<br>• Created a dynamic connection between the website, websocket, and OBS.<br>• Created button functions on the website to run OBS Scenes and Sources.<br>• Created shortcuts and shortcut settings for each function connected to OBS Scenes and Sources.<br>• Created Scenes, Sources, and Profile settings in OBS.",
        
        //Project6
        "title-modal-pro6": "Book E-Commerce Website",
        "time-modal-pro6": "5th November 2024 - 10 th November 2024",
        "desc-modal-pro6": "A project that develops online book shopping activities. This project aims to provide a platform for users to order their favorite and necessary books online without the need for face-to-face interaction and have them delivered anywhere. This is made possible as the project integrates the MidTrans e-payment sandbox and the RajaOngkir API.",
        "subtitle-modal-pro6": "What I did in this Project:",
        "myjob-modal-pro6": "• Designing a database structure using MySQL.<br>• Developing the website using Laravel 10.<br>• Connecting RajaOngkir API with the website.<br>• Developing the appearance and all sales features (check-out, automatic stock delete, e-payment sandbox, admin dashboard) on the website using Laravel 10.",


        //Experience & Education

        //Experience
        "title-experience": "My Experience",

        //Exp1
        "title-card-exp1": "2020-2021",
        "job-card-exp1": "Staff of PubDoc",
        "name-card-exp1": "OSIS SMA Katolik St. Louis 2",

        //Exp2
        "title-card-exp2": "February 2023-April 2023",
        "job-card-exp2": "Head of PDD Team",
        "name-card-exp2": "Perayaan Paskah UKKK UPN Veteran Jawa Timur",

        //Exp3
        "title-card-exp3": "Juny 2023-September 2023",
        "job-card-exp3": "Head of PDD Team",
        "name-card-exp3": "Orientasi Mahasiswa Kristen Baru UKKK UPNVJatim",

        //Exp4
        "title-card-exp4": "February 2022-Present",
        "job-card-exp4": "Staff of Inforcom and Multimedia",
        "name-card-exp4": "GPIB Eben Haezer Surabaya",

        //Exp5
        "title-card-exp5": "September-December 2024",
        "job-card-exp5": "Full Stack Developer MSIB 7",
        "name-card-exp5": "PT Rakamin Kolektif Madani",

        //Exp6
        "title-card-exp6": "16th October 2024-17th January 2025",
        "job-card-exp6": "UI/UX Designer Intern",
        "name-card-exp6": "CV DB Klik",


        //Education
        "title-education": "My Education",

        //Edu1
        "title-card-edu1": "2019-2022",
        "job-card-edu1": "Social Science",
        "name-card-edu1": "SMA Katolik St. Louis 2",

        //Edu2
        "title-card-edu2": "10th-22nd July 2023",
        "job-card-edu2": "Basic Intensive English Program",
        "name-card-edu2": "Language Center",

        //Edu3
        "title-card-edu3": "2022-Present",
        "job-card-edu3": "Informatics",
        "name-card-edu3": "Universitas Pembangunan Nasional Veteran Jawa Timur",

        
        //Modal Experience

        //Modal Exp1
        "title-modal-exp1": "OSIS SMAK Katolik St. Louis 2 Surabaya",
        "time-modal-exp1": "2020-2021",
        "role-modal-exp1": "Staff of Publication & Documentation",
        "desc-modal-exp1": "My jobdesc during my tenure:<br>• Coordinated with teacher about publication projects.<br>• Created video concepts and edited event videos.<br>• Created concepts and designed Instagram feeds.<br>• Interacted with audiences and shared informations on Instagram.<br>• Operated Live Streaming Youtube and Instagram.",

        //Modal Exp2
        "title-modal-exp2": "Perayaan Paskah UKKK UPN Veteran Jatim",
        "time-modal-exp2": "February 2023-April 2023",
        "role-modal-exp2": "Head of Publication, Documentation, and Decoration",
        "desc-modal-exp2": "My jobdesc during my tenure:<br>• Coordinated task for team and scheduled the timeline.<br>• Coordinated with other division to arrange publication and decoration.<br>• Communicated and negotiated with sponsors to get a sponsorship.<br>• Created publications concepts.<br>• Edited sneak peek video, teaser, and after movie.<br>• Achieved 3.700+ Instagram reels views on teaser.<br>• Designed Instagram feeds and event poster.",

        //Modal Exp3
        "title-modal-exp3": "OMKB UKKK UPN Veteran Jatim",
        "time-modal-exp3": "June 2023-September 2023",
        "role-modal-exp3": "Head of Publication and Documentation",
        "desc-modal-exp3": "My jobdesc during my tenure:<br>• Led team and scheduled the timeline.<br>• Coordinated with other division to arrange publication concepts, merchandise, and videos.<br>• Communicated and negotiated with sponsors to get sponsorships.<br>• Created and edited design concept.<br>• Edited after movie video.<br>• Designed Instagram feeds, Technical Meeting information, sponsorship proposal, and event poster.",

        //Modal Exp4
        "title-modal-exp4": "GPIB Eben Haezer Surabaya",
        "time-modal-exp4": "February 2022-Present",
        "role-modal-exp4": "Staff of Information, Communication and Multimedia",
        "desc-modal-exp4": "My jobdesc during my tenure:<br>• Operated Live Streaming of church services.<br>• Scheduled operator every three months.<br>• Created concepts and designed Live Stream thumbnail.<br>• Created concepts and designed Live Stream display.<br>• Created video bumper.",

        //Modal Exp5
        "title-modal-exp5": "PT Rakamin Kolektif Madani",
        "time-modal-exp5": "September-December 2024",
        "role-modal-exp5": "Full Stack Developer MSIB 7",
        "desc-modal-exp5": "My jobdesc during my tenure:<br>• Design and develop APIs using Laravel 10.<br>• Design and develop android applications using Kotlin and Flutter.<br>• Design and develop e-commerce website using Laravel 11 and Filament 3.<br>• Deployment of Zynergy Back-Office and Zynergy API to hosting.<br>• Learned about Project Management, UI/UX Design, User Research, Bootstrap, TailwindCSS, PHP Native, Machine Learning, IT Security, Cloud Computing, and Business Architecture.<br>• Completed the study and was awarded The Most Outstanding Student and Best Student for Final Project.",

        //Modal Exp6
        "title-modal-exp6": "CV DB Klik",
        "time-modal-exp6": "16th October 2024-17th January 2025",
        "role-modal-exp6": "UI/UX Designer Intern",
        "desc-modal-exp6": "My jobdesc during my tenure:<br>• Designing and designing a job search website called DB Job using Figma within 2 months.<br>• Designing and designing DB Klik chatbot website using Figma within 2 months.<br>• Making design improvements to several parts of the DB Klik Article website using Figma within 1 week.<br>• Designing and designing HRIS application for PT Gading Puri Perkasa using Figma within 2 weeks.<br>• Design DB Klik omnichannel website using Figma.",


        //Modal Education

        //Modal Edu1
        "title-modal-edu1": "",
        "time-modal-edu1": "",
        "role-modal-edu1": "",

        //Modal Edu2
        "title-modal-edu2": "Basic Intensive English Program",
        "time-modal-edu2": "10th July 2023 - 22nd July 2023",
        "role-modal-edu2": "Language Center",

        //Modal Edu3
        "title-modal-edu3": "Informatics",
        "time-modal-edu3": "2022-Present",
        "role-modal-edu3": "Universitas Pembangunan Nasional Veteran Jatim",


        // Skills
        "title-skills": "My Skills",
        "desc-skills": "These are skills that I am currently good at and will continue to improve as time goes on.",

        
        //Contact
        "title-contact": "Contact Me",
        "head-contact-phone": "Phone/Whatsapp",
        "head-contact-email": "Email",


        //Footer Area
        "copyright-text": "2024 All rights reserved. Created and designed by <a class='footer-text' href='mailto:gpascalbeye@gmail.com' style='text-decoration: none;'>Gevanno Yoh</a>",
    },

    id: {
        //Preloader
        "preload-h": "H",
        "preload-e": "a",
        "preload-l1": "l",
        "preload-l2": "o",
        "preload-o": "!",
        "preload-!": "",

        //Navbar
        "navlink-about": "Tentang Saya",
        "navlink-projects": "Proyek",
        "navlink-exp&edu": "Pengalaman & Pendidikan",
        "navlink-skills&contact": "Keterampilan & Kontak",

        //Header
        "name": "Saya Gevanno Yohanes",
        "skill-header": "sebagai Full Stack Web<br>dan Mobile Developer",
        "desc-header": "Saya akan selalu berusaha menciptakan tampilan terbaik<br class='hide-me'> untuk menetapkan karakteristik yang unik.",
        "view-btn-cv": "Lihat CVku",
        "title-modal-cv": "Ayo lihat CVku",
        "download-btn-en": "CV - English",
        "download-btn-id": "CV - Bahasa",
        
        //About Me
        "title-about": "Tentang Saya",
        "desc-about": "Saya adalah seorang mahasiswa Teknik Informatika di UPN “Veteran” Jawa Timur<br class='hide-me'> yang memiliki pengalaman dalam merancang dan mengembangkan website dan aplikasi mobile.<br class='hide-me-on-large-devices'> Saya telah menggunakan bahasa pemrograman HTML, CSS, JavaScript, PHP, Java, Kotlin, dan Dart.<br class='hide-me'> Saya sangat tertarik dengan posisi Full Stack Web Development dan Mobile Apps Development.",
        
        //Projects
        "title-projects": "Proyek-Proyek Terbaru Saya",
        "desc-projects": "Semuanya tentang apa yang telah saya buat dan pelajari.",
        
        //Hover Projects

        //Project1
        "project1-title": "Situs Basis Data Universitas",
        "project1-subtitle": "Proyek Kampus",

        //Projects2
        "project2-title": "Situs Pemesanan Menu pada Restoran",
        "project2-subtitle": "Proyek Kampus",

        //Projects3
        "project3-title": "Zynergy (API & Aplikasi Healthcare)",
        "project3-subtitle": "Proyek MSIB",

        //Project4
        "project4-title": "Aplikasi Desktop SPK untuk Beasiswa",
        "project4-subtitle": "Proyek Kampus",

        //Project5
        "project5-title": "Panel OBS Deckstream",
        "project5-subtitle": "Proyek Gereja",

        //Projects6
        "project6-title": "Situs E-Commerce Buku",
        "project6-subtitle": "Proyek MSIB",

        //Modal Projects
        "live-preview": "Pratinjau Langsung",
        "code-preview": "Lihat Kode",
        "code-api-preview": "Lihat Kode API",
        "code-app-preview": "Lihat Kode Aplikasi",
        "code-backoffice-preview": "Lihat Kode Backoffice",
        "download-app": "Unduh Zynergy",
        "live-preview-backoffice": "Demo Backoffice",
        "maintenance": "Maaf, Dalam Pemeliharaan",

        //Project1
        "title-modal-pro1": "Situs Basis Data Universitas",
        "time-modal-pro1": "14 - 21 Desember 2023",
        "desc-modal-pro1": "Sebuah proyek yang mengimplementasikan Advanced Query SQL ke dalam fitur situs web<br>untuk memudahkan pengguna dalam mencari data.",
        "subtitle-modal-pro1": "Apa saja yang saya lakukan dalam Proyek ini:",
        "myjob-modal-pro1": "• Membuat situs dengan HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL.<br>• Merancang basis data.<br>• Menghubungkan basis data ke situs web dengan menerapkan Advanced Query.<br>• Meningkatkan pengalaman pengguna dengan mengoptimalkan tampilan, struktur situs, dan navigasi.",

        //Project2
        "title-modal-pro2": "Situs Pemesanan Menu pada Restoran",
        "time-modal-pro2": "23 Mei 2024 - 12 Juni 2024",
        "desc-modal-pro2": "Sebuah proyek yang mengembangkan kegiatan dalam memesan menu di restoran.<br>Tujuannya adalah untuk memudahkan pelanggan dalam memesan makanan & minuman.",
        "subtitle-modal-pro2": "Apa saja yang saya lakukan dalam Proyek ini:",
        "myjob-modal-pro2": "• Membuat situs dengan HTML5, CSS3, PHP, JavaScript, Bootstrap. MySQL.<br>• Membuat desain basis data.<br>• Membuat animasi dan transisi dengan CSS3 dan JavaScript.<br>• Mengembangkan situs web desktop menjadi situs web responsif.<br>• Membuat fungsi dari item tambahan ke keranjang dengan menerapkan JSON untuk mengumpulkan informasi item.<br>• Meningkatkan pengalaman pengguna dengan mengoptimalkan fungsi tombol dan navigasi pada halaman website.<br>• Memperbaiki halaman thankyou.php supaya menampilkan kode secara otomatis berdasarkan jenis pesanan (dine in atau take away).<br>• Membuat halaman admin dan halaman history order, termasuk dengan modal detail pesanan.<br>• Membuat live halaman pada halaman admin untuk melihat kode pesanan tanpa harus refresh halaman. Live halaman menggunakan React.js.<br>• Membuat notifikasi secara otomatis jika ada pesanan baru.",

        //Project3
        "title-modal-pro3": "Zynergy<br>(API & Aplikasi Android Healthcare)",
        "time-modal-pro3": "18 November 2024 - 18 Desember 2024",
        "desc-modal-pro3": "Sebuah proyek aplikasi android yang dikembangkan berdasarkan hasil riset kelompok 2getHer dalam menanggapi masalah Generasi Z yang memiliki pola hidup yang kurang sehat. Aplikasi ini memiliki tujuan untuk membantu mendukung Generasi Z dalam menjaga pola hidupnya dengan cara mengingatkan pengguna dalam menjaga pola hidup sehat, mulai dari mengingatkan makan, mengingatkan tidur, mengingatkan bangun tidur, mengingatkan olahraga/aktivitas ringan, mengingatkan untuk cek kesehatan, dengan fitur personalisasi yang disesuaikan langsung oleh pengguna dan dapat memberikan rekomendasi jadwal pengingat, jadwal pengingat khusus, rekomendasi menu makanan,  dan rekomendasi artikel.",
        "subtitle-modal-pro3": "Apa saja yang saya lakukan dalam Proyek ini:",
        "myjob-modal-pro3": "• Merancang alur fitur utama aplikasi.<br>• Merancang struktur database menggunakan MySQL.<br>• Mengembangkan 3 fitur pengingat pada API menggunakan Laravel 10.<br>• Deployment Back-Office dan API pada hosting.<br>• Mengembangkan tampilan dan semua fitur (push notification, randomize menu makanan, randomize rekomendasi artikel, personalisasi, login & register, lupa kata sandi) pada aplikasi menggunakan Flutter.<br>• Menghubungkan Google OAuth pada aplikasi dengan Google Cloud Console.<br>• Menghubungkan API dengan aplikasi.<br>• Melakukan tahapan untuk release aplikasi pada Flutter.",

        //Project4
        "title-modal-pro4": "Aplikasi Desktop SPK untuk Beasiswa",
        "time-modal-pro4": "23 Mei 2024 - 12 Juni 2024",
        "desc-modal-pro4": "Sebuah proyek yang mengembangkan perhitungan metode Simple Additive Weighting<br>untuk membantu panitia beasiswa dalam menentukan kelayakan mahasiswa yang mendapatkan beasiswa.",
        "subtitle-modal-pro4": "Apa saja yang saya lakukan dalam Proyek ini:",
        "myjob-modal-pro4": "• Membuat desain basis data.<br>• Membuat antarmuka aplikasi desktop dengan menggunakan Java Swing.<br>• Menghubungkan aplikasi desktop ke basis data dengan menggunakan Java JDBC Driver.<br>• Membuat autentikasi pengguna, manajemen basis data, dan validasi data.<br>• Membuat fitur perhitungan DSS dengan menggunakan perhitungan metode SAW.<br>• Meningkatkan pengalaman pengguna dengan mengoptimalkan fungsi tombol, tampilan, struktur, dan navigasi pada halaman situs web.",

        //Project5
        "title-modal-pro5": "Panel OBS Deckstream",
        "time-modal-pro5": "1 Juli 2024 - Terus Dilanjutkan",
        "desc-modal-pro5": "Sebuah proyek yang mengembangkan koneksi websocket dengan aplikasi penyiaran bernama OBS Studio. Proyek ini bertujuan untuk memudahkan pengguna dalam mengoperasikan OBS Studio dan dapat dijalankan di berbagai platform (desktop dan mobile).",
        "subtitle-modal-pro5": "Apa saja yang saya lakukan dalam Proyek ini:",
        "myjob-modal-pro5": "• Membuat konsep untuk fungsi aplikasi.<br>• Membuat antarmuka pengguna dan pengalaman pengguna.<br>• Membuat koneksi dinamis antara situs web, websocket, dan OBS.<br>• Membuat fungsi tombol pada website untuk menjalankan OBS Scenes dan Sources.<br>• Membuat tombol pintasan dan pengaturan tombol pintasan untuk setiap fungsi yang terhubung ke OBS Scenes dan Sources.<br>• Membuat pengaturan Scenes, Sources, dan Profil di OBS.",

        //Project6
        "title-modal-pro6": "Situs E-Commerce Buku",
        "time-modal-pro6": "05 November 2024 - 10 November 2024",
        "desc-modal-pro6": "Sebuah proyek yang mengembangkan aktivitas belanja buku secara daring. Dimana proyek ini bertujuan memberi sarana bagi pengguna untuk dapat memesan buku favorit dan yang dibutuhkan secara daring tanpa harus bertatap muka dan dapat dikirim kemana saja. Karena proyek ini sudah memuat sandbox e-payment MidTrans dan API RajaOngkir.",
        "subtitle-modal-pro6": "Apa saja yang saya lakukan dalam Proyek ini:",
        "myjob-modal-pro6": "• Merancang struktur database menggunakan MySQL.<br>• Mengembangkan website menggunakan Laravel 10.<br>• Menghubungkan API RajaOngkir dengan website.<br>• Mengembangkan tampilan dan semua fitur penjualan (check-out, delete stok otomatis, sandbox e-payment, dashboard admin) pada website menggunakan Laravel 10.",

        //Experience & Education

        //Experience
        "title-experience": "Pengalaman Saya",

        //Exp1
        "title-card-exp1": "2020-2021",
        "job-card-exp1": "Anggota Divisi PubDok",
        "name-card-exp1": "OSIS SMA Katolik St. Louis 2",

        //Exp2
        "title-card-exp2": "Februari-April 2023",
        "job-card-exp2": "Kepala Divisi PDD",
        "name-card-exp2": "Perayaan Paskah UKKK UPN Veteran Jawa Timur",

        //Exp3
        "title-card-exp3": "Juni-September 2023",
        "job-card-exp3": "Kepala Divisi PDD",
        "name-card-exp3": "Orientasi Mahasiswa Kristen Baru UKKK UPNVJatim",

        //Exp4
        "title-card-exp4": "Februari 2022-Sekarang",
        "job-card-exp4": "Pengurus Inforkom dan Multimedia",
        "name-card-exp4": "GPIB Eben Haezer Surabaya",

        //Exp5
        "title-card-exp5": "September-Desember 2024",
        "job-card-exp5": "Peserta MSIB 7 Full Stack Developer",
        "name-card-exp5": "PT Rakamin Kolektif Madani",

        //Exp6
        "title-card-exp6": "16 Oktober 2024-17 Januari 2025",
        "job-card-exp6": "Magang sebagai UI/UX Designer",
        "name-card-exp6": "CV DB Klik",


        //Education
        "title-education": "Pendidikan Saya",

        //Edu1
        "title-card-edu1": "2019-2022",
        "job-card-edu1": "Ilmu Pengetahuan Sosial",
        "name-card-edu1": "SMAK Katolik St. Louis 2",

        //Edu2
        "title-card-edu2": "10-22 Juli 2023",
        "job-card-edu2": "Program Intensif Bahasa Inggris Dasar",
        "name-card-edu2": "Language Center",

        //Edu3
        "title-card-edu3": "2022-Sekarang",
        "job-card-edu3": "Informatika",
        "name-card-edu3": "Universitas Pembangunan Nasional Veteran Jawa Timur",

        
        //Modal Experience

        //Modal Exp1
        "title-modal-exp1": "OSIS SMAK Katolik St. Louis 2 Surabaya",
        "time-modal-exp1": "2020-2021",
        "role-modal-exp1": "Anggota Divisi Publikasi dan Dokumentasi",
        "desc-modal-exp1": "Jobdesk saya selama masa jabatan saya:<br>• Berkoordinasi dengan guru tentang proyek publikasi.<br>• Membuat konsep video dan mengedit video acara.<br>• Membuat konsep dan mendesain feed Instagram.<br>• Berinteraksi dengan audiens dan berbagi informasi di Instagram.<br>• Mengoperasikan Live Streaming Youtube dan Instagram.",

        //Modal Exp2
        "title-modal-exp2": "Perayaan Paskah UKKK UPN Veteran Jatim",
        "time-modal-exp2": "Februari-April 2023",
        "role-modal-exp2": "Kepala Divisi Publikasi, Dokumentasi, dan Dekorasi",
        "desc-modal-exp2": "Jobdesk saya selama masa jabatan saya:<br>• Mengkoordinasikan tugas untuk tim dan menjadwalkan jadwal.<br>• Berkoordinasi dengan divisi lain untuk mengatur publikasi dan dekorasi.<br>• Berkomunikasi dan bernegosiasi dengan sponsor untuk mendapatkan sponsor.<br>• Membuat konsep publikasi.<br>• Mengedit video sneak peek, teaser, dan after movie.<br>• Mencapai 3.700+ penayangan di Instagram untuk teaser.<br>• Mendesain feed Instagram dan poster acara.",

        //Modal Exp3
        "title-modal-exp3": "OMKB UKKK UPN Veteran Jatim",
        "time-modal-exp3": "Juni-September 2023",
        "role-modal-exp3": "Kepala Divisi Publikasi dan Dokumentasi",
        "desc-modal-exp3": "Jobdesk saya selama masa jabatan saya::<br>• Memimpin tim dan menyusun jadwal program kerja.<br>• Berkoordinasi dengan divisi lain untuk mengatur konsep publikasi, merchandise, dan video-video.<br>• Berkomunikasi dan bernegosiasi dengan sponsor untuk mendapatkan sponsor.<br>• Membuat dan mengedit konsep desain.<br>• Mengedit video after movie<br>• Mendesain feed Instagram, informasi Technical Meeting, proposal sponsor, dan poster acara.",

        //Modal Exp4
        "title-modal-exp4": "GPIB Eben Haezer Surabaya",
        "time-modal-exp4": "Februari 2022-Sekarang",
        "role-modal-exp4": "Pengurus Divisi Informasi, Komunikasi, dan Multimedia",
        "desc-modal-exp4": "Jobdesk saya selama masa jabatan saya:<br>• Mengoperasikan Live Streaming kebaktian gereja.<br>• Menjadwalkan operator setiap tiga bulan sekali.<br>• Membuat konsep dan mendesain thumbnail Live Streaming.<br>• Membuat konsep dan mendesain tampilan Live Streaming.<br>• Membuat bumper video.",

        //Modal Exp5
        "title-modal-exp5": "PT Rakamin Kolektif Madani",
        "time-modal-exp5": "September-Desember 2024",
        "role-modal-exp5": "Peserta MSIB 7 Full Stack Developer",
        "desc-modal-exp5": "Jobdesk saya selama masa jabatan saya:<br>• Merancang dan mengembangkan API menggunakan Laravel 10.<br>• Merancang dan mengembangkan aplikasi android menggunakan Kotlin dan Flutter.<br>• Merancang dan mengembangkan website e-commerce menggunakan Laravel 11 dan Filament 3.<br>• Deployment Back-Office Zynergy dan API Zynergy ke hosting.<br>• Mempelajari tentang Project Management, UI/UX Design, User Research, Bootstrap, TailwindCSS, PHP Native, Machine Learning, IT Security, Cloud Computing, dan Business Architecture.<br>• Menyelesaikan studi dan mendapat penghargaan The Most Outstanding Student dan Best Student for Final Project.",

        //Modal Exp6
        "title-modal-exp6": "CV DB Klik",
        "time-modal-exp6": "16 Oktober 2024-17 Januari 2025",
        "role-modal-exp6": "Magang sebagai UI/UX Designer",
        "desc-modal-exp6": "Jobdesk saya selama masa jabatan saya:<br>• Merancang dan mendesain website pencari lowongan pekerjaan bernama DB Job menggunakan Figma dalam waktu 2 bulan.<br>• Merancang dan mendesain website chatbot DB Klik menggunakan Figma dalam waktu 2 bulan.<br>• Melakukan perbaikan desain pada beberapa bagian website DB Klik Artikel menggunakan Figma dalam waktu 1 minggu.<br>• Merancang dan mendesain aplikasi HRIS untuk PT Gading Puri Perkasa menggunakan Figma dalam waktu 2 minggu.<br>• Mendesain website omnichannel DB Klik menggunakan Figma.",
        

        //Modal Education

        //Modal Edu1
        "title-modal-edu1": "",
        "time-modal-edu1": "",
        "role-modal-edu1": "",

        //Modal Edu2
        "title-modal-edu2": "Program Intensif Bahasa Inggris Dasar",
        "time-modal-edu2": "10 Juli 2023-22 Juli 2023",
        "role-modal-edu2": "Language Center",

        //Modal Edu3
        "title-modal-edu3": "Informatika",
        "time-modal-edu3": "2022-Sekarang",
        "role-modal-edu3": "Universitas Pembangunan Nasional Veteran Jatim",


        // Skills
        "title-skills": "Keahlian Saya",
        "desc-skills": "Ini adalah keahlian yang saat ini saya kuasai dan akan terus saya tingkatkan seiring berjalannya waktu.",

        //Contact
        "title-contact": "Hubungi Saya",
        "head-contact-phone": "Telepon/Whatsapp",
        "head-contact-email": "Surel",


        //Footer Area
        "copyright-text": "2024 Semua hak cipta dilindungi undang-undang. Dibuat dan dirancang oleh <a class='footer-text' href='mailto:gpascalbeye@gmail.com' style='text-decoration: none;'>Gevanno Yoh</a>",
    }
};