// Main Script for MerakitZAM Website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Initialize Swiper
    const gallerySwiper = new Swiper('.gallerySwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.querySelector('.hamburger').classList.toggle('hamburger-active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.querySelector('.hamburger').classList.remove('hamburger-active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header button');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement.parentElement;
            const accordionContent = header.parentElement.nextElementSibling;
            
            // Close all other items
            document.querySelectorAll('.accordion-content').forEach(content => {
                if (content !== accordionContent && content.classList.contains('hidden') === false) {
                    content.classList.add('hidden');
                    content.previousElementSibling.querySelector('button').classList.remove('active');
                }
            });
            
            // Toggle current item
            header.classList.toggle('active');
            accordionContent.classList.toggle('hidden');
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to your server
            // For demo purposes, we'll just show a success message
            
            Swal.fire({
                title: currentLang === 'id' ? 'Pesan Terkirim!' : 'Message Sent!',
                text: currentLang === 'id' ? 'Terima kasih atas pesan Anda. Saya akan segera menghubungi Anda kembali.' : 'Thank you for your message. I will get back to you soon.',
                icon: 'success',
                confirmButtonText: currentLang === 'id' ? 'OK' : 'OK',
                confirmButtonColor: '#FF6B00'
            });
            
            // Reset form
            contactForm.reset();
        });
    }

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            Swal.fire({
                title: currentLang === 'id' ? 'Berlangganan Berhasil!' : 'Subscription Successful!',
                text: currentLang === 'id' ? 'Terima kasih telah berlangganan newsletter kami.' : 'Thank you for subscribing to our newsletter.',
                icon: 'success',
                confirmButtonText: currentLang === 'id' ? 'OK' : 'OK',
                confirmButtonColor: '#FF6B00'
            });
            
            // Reset form
            newsletterForm.reset();
        });
    }
});
