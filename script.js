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
    const section = document.querySelector('section');
    const createElement = document.createElement('span');
    var size = Math.random() * 60;
    var maxWidth = window.innerWidth - 80; // 80 é um valor arbitrário para evitar que as bolhas ultrapassem a borda direita

    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * maxWidth + 'px'; // Usando maxWidth em vez de innerWidth
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove();
    }, 4000);
}

setInterval(createBolhas, 50);
