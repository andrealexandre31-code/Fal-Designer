
// 1. Rolagem Suave (Smooth Scroll) para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calcula a altura da navbar para não cobrir o título da seção
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Fecha o menu mobile caso esteja aberto (opcional)
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// 2. Efeito de Revelação ao Rolar (Scroll Reveal)
// Faz as seções aparecerem suavemente conforme você desce a página
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});

// 3. Mudança de cor da Navbar ao rolar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(255, 255, 255, 0.95)";
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        nav.style.background = "rgba(255, 255, 255, 0.8)";
        nav.style.boxShadow = "none";
    }
});
// Selecionando os elementos do Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');

// Adiciona evento de clique em todas as imagens do portfólio
document.querySelectorAll('.img-wrapper img').forEach(image => {
    image.style.cursor = 'zoom-in'; // Muda o cursor para indicar que é clicável
    image.onclick = () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src; // Pega o link da imagem clicada
    };
});

// Fecha o Lightbox ao clicar no 'X'
closeBtn.onclick = () => {
    lightbox.style.display = 'none';
};

// Fecha o Lightbox ao clicar em qualquer lugar fora da imagem
lightbox.onclick = (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
};
