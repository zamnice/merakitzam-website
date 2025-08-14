// Mobile Menu Toggle
document.getElementById('menu-btn').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});

// Scroll Animation
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})

// SweetAlert for Form Submission (example)
if (window.location.search.includes('form-submitted=true')) {
  Swal.fire({
    title: 'Terima kasih!',
    text: 'Pesan kamu sudah terkirim!',
    icon: 'success',
    confirmButtonColor: '#FF6B00'
  });
}

