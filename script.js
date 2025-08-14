// Initialize AOS animations
AOS.init({
  duration: 800,
  once: true
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', function() {
  this.classList.toggle('is-active');
  mobileMenu.classList.toggle('hidden');
  
  // Update ARIA attributes
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
  mobileMenu.setAttribute('aria-hidden', isExpanded);
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    menuBtn.classList.remove('is-active');
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      menuBtn.classList.remove('is-active');
      mobileMenu.classList.add('hidden');
      
      // Scroll to target
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Infinite marquee animation
const marqueeContent = document.querySelector('.marquee-content');
const marqueeItems = marqueeContent.innerHTML;
marqueeContent.innerHTML = marqueeItems + marqueeItems; // Duplicate for seamless loop
