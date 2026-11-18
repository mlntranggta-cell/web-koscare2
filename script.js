
// Animasi saat halaman digulir
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((element) => {
  observer.observe(element);
});

// Progress bar halaman
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = documentHeight > 0
    ? (scrollTop / documentHeight) * 100
    : 0;

  document.getElementById('progress').style.width = progress + '%';
});

// Menu untuk tampilan HP
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Tutup menu setelah memilih bagian
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
