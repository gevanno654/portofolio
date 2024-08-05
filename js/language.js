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
        "name": "I am Gevanno",
        "skill-header": "as a Front End<br>and Web Developer",
        "desc-header": "I will always strive to create the best appearance<br class='hide-me'> to establish a unique characteristic.",
        "download-btn": "Download My CV",
        
        //About Me
        "title-about": "About Me",
        "desc-about": "I am an Informatics student at Universitas Pembangunan Nasional Veteran Jawa Timur<br class='hide-me'> with experience in creating and developing websites.<br class='hide-me-on-large-devices'> I have knowledge of HTML, CSS, JavaScript, PHP, and Java.<br class='hide-me'> Apart from that, I am able to create poster designs and social media posts<br class='hide-me'> using Adobe Photoshop and Canva.<br class='hide-me'> Blend the art of design with programming skills to enhance the user experience.<br class='hide-me'> I am very interested in a Front End position or Web Developments.",
        
        //Projects
        "title-projects": "My Recent Projects",
        "desc-projects": "It's all about what I've created and learned.",

        //Hover Projects
        "project1-title": "University Database Website",
        "project1-subtitle": "Campus Projects",
        "project2-title": "Restaurant Menu Website",
        "project2-subtitle": "Campus Projects",
        "project3-title": "DSS for Scholarship Desktop App",
        "project3-subtitle": "Campus Projects",
        "project4-title": "OBS Deckstream Panel",
        "project4-subtitle": "Church Projects",

        //Modal Projects
        "live-preview": "Live Preview",
        "code-preview": "View Codes",

        //Project1
        "title-modal-pro1": "University Database Website",
        "time-modal-pro1": "14th - 21th December 2023",
        "desc-modal-pro1": "A project that implements Advanced Query SQL into a website feature<br>to make it easier for users to search for data.",
        "subtitle-modal-pro1": "What I did in this Project:",
        "myjob-modal-pro1": "• Built with HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL.<br>• Designed database.<br>• Connected database to the website by applying Advanced Query.<br>• Enhanced user experience by optimizing the display, site structure, and navigation.",

        //Project2
        "title-modal-pro2": "Restaurant Menu Website",
        "time-modal-pro2": "23th May 2024 - 12th June 2024",
        "desc-modal-pro2": "A project that develops activities in ordering menus at a restaurant.<br>The goal is to make it easier for customers to order food & drinks.",
        "subtitle-modal-pro2": "What I did in this Project:",
        "myjob-modal-pro2": "• Built website with HTML5, CSS3, PHP, JavaScript, Bootstrap.<br>• Created database design.<br>• Created animation and transition with CSS3 dan JavaScript.<br>• Developed desktop website to responsive website.<br>• Built function from additional item to cart by applying JSON to collect item’s information.<br>• Enhanced user experience by optimizing button function and navigation on the website page.<br>• Imporved the thankyou.php page to automatically display the code based on the order type (dine in or take away).<br>• Created admin page and order history page, including order detail modal.<br>• Created live page on the admin page to view the order code without having to refresh the page. Live page using React.js<br>• Created notification automatically if there is a new order.",

        //Project3
        "title-modal-pro3": "Decision Support System<br>for Scholarship Desktop App",
        "time-modal-pro3": "23th May 2024 - 12th June 2024",
        "desc-modal-pro3": "A project that develops the calculation of the Simple Additive Weighting method<br>to assist a scholarship committee in determining the eligibility of students who get scholarships.",
        "subtitle-modal-pro3": "What I did in this Project:",
        "myjob-modal-pro3": "• Created database design.<br>• Created interface desktop app with menggunakan Java Swing.<br>• Connected desktop app to database with Java JDBC Driver.<br>• Created user authentication, database management, and data validation.<br>• Created DSS calculation feature by applying SAW method calculation.<br>• Enhanced user experience by optimizing button function, display, structure, and navigation on the website page.",

        //Project4
        "title-modal-pro4": "OBS Deckstream Panel",
        "time-modal-pro4": "1st July 2024 - To be Continued",
        "desc-modal-pro4": "A project that develops a websocket connection with a broadcasting application called OBS Studio. This project aims to make it easier for users to operate OBS Studio and can be run on multiple platforms (desktop and mobile).",
        "subtitle-modal-pro4": "What I did in this Project:",
        "myjob-modal-pro4": "• Created concepts for application functions.<br>• Created user interface and user experience.<br>• Created a dynamic connection between the website, websocket, and OBS.<br>• Created button functions on the website to run OBS Scenes and Sources.<br>• Created shortcuts and shortcut settings for each function connected to OBS Scenes and Sources.<br>• Created Scenes, Sources, and Profile settings in OBS.",
        

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
        "name": "Saya Gevanno",
        "skill-header": "sebagai Front End<br>dan Pengembang Web",
        "desc-header": "Saya akan selalu berusaha menciptakan tampilan terbaik<br class='hide-me'> untuk menetapkan karakteristik yang unik.",
        "download-btn": "Unduh CVku",
        
        //About Me
        "title-about": "Tentang Saya",
        "desc-about": "Saya adalah seorang mahasiswa Teknik Informatika di UPN “Veteran” Jawa Timur<br class='hide-me'> yang memiliki pengalaman dalam membuat dan mengembangkan website.<br class='hide-me-on-large-devices'> Saya memiliki pengetahuan tentang HTML, CSS, JavaScript, PHP, dan Java.<br class='hide-me'> Selain itu, saya juga dapat membuat desain poster dan media sosial<br class='hide-me'> menggunakan Adobe Photoshop dan Canva. Memadukan seni desain<br class='hide-me'> dengan keterampilan pemrograman untuk meningkatkan pengalaman pengguna.<br class='hide-me'> Saya sangat tertarik dengan posisi Front End atau Pengembangan Web.",
        
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

        //Project3
        "project3-title": "Aplikasi Desktop SPK untuk Beasiswa",
        "project3-subtitle": "Proyek Kampus",

        //Project4
        "project4-title": "Panel OBS Deckstream",
        "project4-subtitle": "Proyek Gereja",

        //Modal Projects
        "live-preview": "Pratinjau Langsung",
        "code-preview": "Lihat Kode",

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
        "title-modal-pro3": "Aplikasi Desktop SPK untuk Beasiswa",
        "time-modal-pro3": "23 Mei 2024 - 12 Juni 2024",
        "desc-modal-pro3": "Sebuah proyek yang mengembangkan perhitungan metode Simple Additive Weighting<br>untuk membantu panitia beasiswa dalam menentukan kelayakan mahasiswa yang mendapatkan beasiswa.",
        "subtitle-modal-pro3": "Apa saja yang saya lakukan dalam Proyek ini:",
        "myjob-modal-pro3": "• Membuat desain basis data.<br>• Membuat antarmuka aplikasi desktop dengan menggunakan Java Swing.<br>• Menghubungkan aplikasi desktop ke basis data dengan menggunakan Java JDBC Driver.<br>• Membuat autentikasi pengguna, manajemen basis data, dan validasi data.<br>• Membuat fitur perhitungan DSS dengan menggunakan perhitungan metode SAW.<br>• Meningkatkan pengalaman pengguna dengan mengoptimalkan fungsi tombol, tampilan, struktur, dan navigasi pada halaman situs web.",

        //Project4
        "title-modal-pro4": "Panel OBS Deckstream",
        "time-modal-pro4": "1 Juli 2024 - Terus Dilanjutkan",
        "desc-modal-pro4": "Sebuah proyek yang mengembangkan koneksi websocket dengan aplikasi penyiaran bernama OBS Studio. Proyek ini bertujuan untuk memudahkan pengguna dalam mengoperasikan OBS Studio dan dapat dijalankan di berbagai platform (desktop dan mobile).",
        "subtitle-modal-pro4": "Apa saja yang saya lakukan dalam Proyek ini:",
        "myjob-modal-pro4": "• Membuat konsep untuk fungsi aplikasi.<br>• Membuat antarmuka pengguna dan pengalaman pengguna.<br>• Membuat koneksi dinamis antara situs web, websocket, dan OBS.<br>• Membuat fungsi tombol pada website untuk menjalankan OBS Scenes dan Sources.<br>• Membuat tombol pintasan dan pengaturan tombol pintasan untuk setiap fungsi yang terhubung ke OBS Scenes dan Sources.<br>• Membuat pengaturan Scenes, Sources, dan Profil di OBS.",


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