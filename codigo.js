// Navegação entre as seções
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const aboutDiv = document.getElementById('about');
const bannertDiv = document.getElementById('banner');
const adegaLink = document.querySelector('.nav-link[data-section="adega"]');
const wineShowcaseLink = document.querySelector('.nav-link[data-section="wine-showcase"]');
const vinhosSection = document.getElementById('vinhos');
const wineShowcaseSection = document.getElementById('wine-showcase');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', e => {
    e.preventDefault();

    const sectionId = navLink.getAttribute('data-section');

    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });

    if (sectionId === 'adega') {
      aboutDiv.style.display = 'block';
    } else {
      aboutDiv.style.display = 'none';
    }

    if (sectionId === 'vinhos') {
      vinhosSection.style.display = 'block';
      wineShowcaseSection.style.display = 'none';
    } else {
      vinhosSection.style.display = 'none';
    }

     // Oculta a seção "Sobre Nós" se o link clicado não for "A Adega"
     if (sectionId !== 'adega') {
        aboutDiv.style.display = 'none';
      } else {
        aboutDiv.style.display = 'block';
      }

    navLinks.forEach(link => {
      if (link === navLink) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
});

 
adegaLink.addEventListener('click', () => {
  aboutDiv.style.display = 'block';
  bannertDiv.style.display = 'none';
});

wineShowcaseLink.addEventListener('click', () => {
  vinhosSection.style.display = 'block';
  wineShowcaseSection.style.display = 'none';
  bannertDiv.style.display = 'none';
});
