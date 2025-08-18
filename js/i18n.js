// Internationalization (i18n) Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Translations object
    const translations = {
        id: {
            // Navigation
            'nav.home': 'Beranda',
            'nav.projects': 'Kreasi',
            'nav.blog': 'Inspirasi',
            'nav.gallery': 'Galeri',
            'nav.faq': 'FAQ',
            'nav.contact': 'Kolaborasi',
            
            // Hero
            'hero.title': 'Kreasi & Belajar <span class="text-primary">Tanpa Batas</span>',
            'hero.subtitle': 'Temukan dunia kreativitas dan pembelajaran yang menyenangkan bersama ZAM ZAM. Mari berkolaborasi untuk menciptakan sesuatu yang bermakna!',
            'hero.cta': 'Jelajahi Karya',
            'hero.contact': 'Hubungi Saya',
            
            // Marquee
            'marquee.text': 'Design • Writing • Productivity • Learning • Creativity • Innovation • Design • Writing • Productivity • Learning • Creativity • Innovation',
            
            // Projects
            'projects.subtitle': 'Portfolio',
            'projects.title': 'Karya Terbaru',
            'projects.description': 'Beberapa proyek terbaik yang telah saya kerjakan dengan penuh semangat dan kreativitas.',
            'projects.zorey.title': 'Zorey AI',
            'projects.zorey.desc': 'Platform AI untuk meningkatkan kreativitas dan produktivitas dengan teknologi terbaru.',
            'projects.tugasfy.title': 'Tugasfy',
            'projects.tugasfy.desc': 'Aplikasi manajemen tugas yang membantu siswa dan mahasiswa lebih terorganisir.',
            'projects.pastiow.title': 'Pastiow',
            'projects.pastiow.desc': 'Platform pembelajaran online interaktif dengan pendekatan yang menyenangkan.',
            'projects.demo': 'Demo',
            'projects.more': 'Lihat Semua Proyek',
            
            // Blog
            'blog.subtitle': 'Artikel Terkini',
            'blog.title': 'Inspirasi & Tips',
            'blog.description': 'Tulisan terbaru tentang kreativitas, produktivitas, dan dunia pembelajaran yang menyenangkan.',
            'blog.category.productivity': 'Produktivitas',
            'blog.category.design': 'Desain',
            'blog.category.learning': 'Pembelajaran',
            'blog.post1.date': '15 Desember 2024',
            'blog.post1.title': '10 Tips Meningkatkan Produktivitas Kreatif',
            'blog.post1.excerpt': 'Bagaimana cara tetap produktif tanpa kehilangan kreativitas dalam pekerjaan sehari-hari...',
            'blog.post2.date': '12 Desember 2024',
            'blog.post2.title': 'Tren Desain 2024: Apa yang Perlu Anda Ketahui',
            'blog.post2.excerpt': 'Eksplorasi tren desain terbaru yang akan mendominasi tahun ini dan bagaimana memanfaatkannya...',
            'blog.post3.date': '10 Desember 2024',
            'blog.post3.title': 'Membangun Kebiasaan Belajar yang Efektif',
            'blog.post3.excerpt': 'Strategi membangun kebiasaan belajar yang berkelanjutan dan menyenangkan untuk semua usia...',
            'blog.readmore': 'Baca selengkapnya',
            'blog.more': 'Lihat Semua Artikel',
            
            // Gallery
            'gallery.subtitle': 'Koleksi Visual',
            'gallery.title': 'Galeri Karya',
            'gallery.description': 'Kumpulan karya visual yang telah saya buat dalam berbagai proyek kreatif.',
            
            // FAQ
            'faq.subtitle': 'Pertanyaan Umum',
            'faq.title': 'FAQ',
            'faq.description': 'Beberapa pertanyaan yang sering diajukan tentang karya dan layanan saya.',
            'faq.q1': 'Bagaimana cara memulai proyek kolaborasi?',
            'faq.a1': 'Anda bisa menghubungi saya melalui halaman kontak atau langsung mengirim email. Kami akan mendiskusikan detail proyek, timeline, dan anggaran untuk memastikan semuanya sesuai dengan kebutuhan Anda.',
            'faq.q2': 'Apa saja layanan yang Anda tawarkan?',
            'faq.a2': 'Saya menawarkan berbagai layanan termasuk desain grafis, pengembangan web, penulisan kreatif, konsultasi pembelajaran, dan pembuatan konten edukatif. Silakan lihat bagian proyek untuk contoh pekerjaan saya.',
            'faq.q3': 'Berapa lama waktu pengerjaan proyek?',
            'faq.a3': 'Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Proyek sederhana mungkin selesai dalam 1-2 minggu, sementara proyek yang lebih kompleks bisa memakan waktu 1-3 bulan. Timeline pasti akan didiskusikan sebelum proyek dimulai.',
            'faq.q4': 'Apakah Anda menerima proyek freelance?',
            'faq.a4': 'Ya, saya terbuka untuk proyek freelance yang sesuai dengan minat dan keahlian saya. Silakan hubungi saya untuk mendiskusikan detail proyek Anda.',
            
            // Contact
            'contact.subtitle': 'Mari Bekerja Sama',
            'contact.title': 'Hubungi Saya',
            'contact.description': 'Tertarik berkolaborasi atau memiliki pertanyaan? Silakan hubungi saya melalui salah satu cara berikut.',
            'contact.email': 'Email',
            'contact.send': 'Kirim Email',
            'contact.message': 'Kirim Pesan',
            'contact.connect': 'Terhubung',
            
            // Form
            'form.title': 'Kirim Pesan Langsung',
            'form.name': 'Nama Lengkap',
            'form.email': 'Alamat Email',
            'form.subject': 'Subjek',
            'form.message': 'Pesan Anda',
            'form.submit': 'Kirim Pesan',
            
            // Newsletter
            'newsletter.title': 'Tetap Terhubung',
            'newsletter.description': 'Berlangganan newsletter untuk mendapatkan update terbaru tentang proyek, artikel, dan sumber daya gratis.',
            'newsletter.subscribe': 'Berlangganan',
            
            // Footer
            'footer.about': 'Kreativitas tanpa batas, pembelajaran yang menyenangkan. Berbagi inspirasi dan solusi untuk dunia yang lebih baik.',
            'footer.links': 'Tautan Cepat',
            'footer.contact': 'Kontak',
            'footer.location': 'Indonesia',
            'footer.copyright': '© 2025 MerakitZAM. All rights reserved.'
        },
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.projects': 'Projects',
            'nav.blog': 'Insights',
            'nav.gallery': 'Gallery',
            'nav.faq': 'FAQ',
            'nav.contact': 'Collaborate',
            
            // Hero
            'hero.title': 'Creativity & Learning <span class="text-primary">Without Limits</span>',
            'hero.subtitle': 'Discover a world of fun creativity and learning with ZAM ZAM. Let\'s collaborate to create something meaningful!',
            'hero.cta': 'Explore Works',
            'hero.contact': 'Contact Me',
            
            // Marquee
            'marquee.text': 'Design • Writing • Productivity • Learning • Creativity • Innovation • Design • Writing • Productivity • Learning • Creativity • Innovation',
            
            // Projects
            'projects.subtitle': 'Portfolio',
            'projects.title': 'Featured Projects',
            'projects.description': 'Some of the best projects I\'ve worked on with passion and creativity.',
            'projects.zorey.title': 'Zorey AI',
            'projects.zorey.desc': 'AI platform to enhance creativity and productivity with cutting-edge technology.',
            'projects.tugasfy.title': 'Tugasfy',
            'projects.tugasfy.desc': 'Task management app that helps students stay organized.',
            'projects.pastiow.title': 'Pastiow',
            'projects.pastiow.desc': 'Interactive online learning platform with a fun approach.',
            'projects.demo': 'Demo',
            'projects.more': 'View All Projects',
            
            // Blog
            'blog.subtitle': 'Latest Articles',
            'blog.title': 'Insights & Tips',
            'blog.description': 'Latest writings about creativity, productivity, and the world of fun learning.',
            'blog.category.productivity': 'Productivity',
            'blog.category.design': 'Design',
            'blog.category.learning': 'Learning',
            'blog.post1.date': 'December 15, 2024',
            'blog.post1.title': '10 Tips to Boost Creative Productivity',
            'blog.post1.excerpt': 'How to stay productive without losing creativity in daily work...',
            'blog.post2.date': 'December 12, 2024',
            'blog.post2.title': 'Design Trends 2024: What You Need to Know',
            'blog.post2.excerpt': 'Exploring the latest design trends that will dominate this year and how to leverage them...',
            'blog.post3.date': 'December 10, 2024',
            'blog.post3.title': 'Building Effective Learning Habits',
            'blog.post3.excerpt': 'Strategies for building sustainable and enjoyable learning habits for all ages...',
            'blog.readmore': 'Read more',
            'blog.more': 'View All Articles',
            
            // Gallery
            'gallery.subtitle': 'Visual Collection',
            'gallery.title': 'Work Gallery',
            'gallery.description': 'Collection of visual works I\'ve created in various creative projects.',
            
            // FAQ
            'faq.subtitle': 'Frequently Asked',
            'faq.title': 'Questions',
            'faq.description': 'Some common questions about my work and services.',
            'faq.q1': 'How to start a collaboration project?',
            'faq.a1': 'You can contact me through the contact page or send an email directly. We will discuss project details, timeline, and budget to ensure everything meets your needs.',
            'faq.q2': 'What services do you offer?',
            'faq.a2': 'I offer various services including graphic design, web development, creative writing, learning consultation, and educational content creation. Please see the projects section for examples of my work.',
            'faq.q3': 'How long does a project take to complete?',
            'faq.a3': 'Completion time varies depending on project complexity. Simple projects may be completed in 1-2 weeks, while more complex projects may take 1-3 months. Exact timeline will be discussed before project starts.',
            'faq.q4': 'Do you accept freelance projects?',
            'faq.a4': 'Yes, I\'m open to freelance projects that match my interests and expertise. Please contact me to discuss your project details.',
            
            // Contact
            'contact.subtitle': 'Let\'s Work Together',
            'contact.title': 'Contact Me',
            'contact.description': 'Interested in collaborating or have questions? Please contact me through one of the following methods.',
            'contact.email': 'Email',
            'contact.send': 'Send Email',
            'contact.message': 'Send Message',
            'contact.connect': 'Connect',
            
            // Form
            'form.title': 'Send Direct Message',
            'form.name': 'Full Name',
            'form.email': 'Email Address',
            'form.subject': 'Subject',
            'form.message': 'Your Message',
            'form.submit': 'Send Message',
            
            // Newsletter
            'newsletter.title': 'Stay Connected',
            'newsletter.description': 'Subscribe to newsletter to get the latest updates on projects, articles, and free resources.',
            'newsletter.subscribe': 'Subscribe',
            
            // Footer
            'footer.about': 'Boundless creativity, joyful learning. Sharing inspiration and solutions for a better world.',
            'footer.links': 'Quick Links',
            'footer.contact': 'Contact',
            'footer.location': 'Indonesia',
            'footer.copyright': '© 2025 MerakitZAM. All rights reserved.'
        }
    };

    // Current language
    let currentLang = localStorage.getItem('language') || 'id';
    
    // Initialize language
    updateLanguage();
    
    // Language toggle functionality
    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('language', currentLang);
        updateLanguage();
        
        // Show notification
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: currentLang === 'id' ? 'Bahasa diubah ke Indonesia' : 'Language switched to English',
            showConfirmButton: false,
            timer: 1000,
            toast: true
        });
    });
    
    // Update all elements with translations
    function updateLanguage() {
        // Update language toggle button
        const langToggle = document.getElementById('langToggle');
        const langLabel = langToggle.querySelector('.lang-label');
        langLabel.textContent = currentLang === 'id' ? 'EN' : 'ID';
        document.documentElement.lang = currentLang === 'id' ? 'id-ID' : 'en-US';
        
        // Update all translatable elements
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[currentLang][key];
                } else {
                    element.innerHTML = translations[currentLang][key];
                }
            }
        });
    }
});
