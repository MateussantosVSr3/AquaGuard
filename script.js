/* Carousel */
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const newTransform = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform}%)`;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(() => {
    nextSlide();
}, 10000);

/* Formulario */

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';


    let isValid = true;


    const name = document.getElementById('name').value;
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'Por favor, insira seu nome.';
    }


    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.';
    }


    const message = document.getElementById('message').value;
    if (message === '') {
        isValid = false;
        document.getElementById('messageError').textContent = 'Por favor, insira sua mensagem.';
    }


    if (isValid) {
        alert('Mensagem enviada com sucesso!');
    }
});

const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');

messageInput.addEventListener('input', function() {
    const currentLength = messageInput.value.length;
    charCount.textContent = `${currentLength}/250`;
});

/* Bolhas */

function createBolhas(){
    // Verifica se a largura da tela é maior que 768 pixels
    if (window.innerWidth <= 768) {
        return; // Se for menor ou igual a 768 pixels, a função é interrompida
    }
    
    const section = document.querySelector('section');
    const createElement = document.createElement('span');
    var size = Math.random() * 60;
    var maxWidth = window.innerWidth - 80;

    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * maxWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove();
    }, 4000);
}

// Executa createBolhas() apenas quando a largura da tela for maior que 768 pixels
if (window.innerWidth > 768) {
    setInterval(createBolhas, 50);
}

/* Menu */

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navSections = document.getElementById('nav-sections');

    hamburger.addEventListener('click', function() {
        if (navSections.style.display === 'block') {
            navSections.style.display = 'none';
        } else {
            navSections.style.display = 'block';
        }
    });
});
