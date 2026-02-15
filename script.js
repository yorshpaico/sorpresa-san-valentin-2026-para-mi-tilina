document.addEventListener("DOMContentLoaded", () => {
    // === CONFIGURACIÓN PERSONALIZABLE ===
    const CONFIG = {
        START_DATE: new Date('2023-12-15T00:00:00'), // FECHA DE INICIO
        CAROUSEL: { 
            TOTAL_IMAGES: 20, // ¡CAMBIA ESTO AL NÚMERO REAL DE FOTOS QUE TENGAS!
            PATH: './img/photo' // Asegúrate que tus fotos sean photo1.jpg, photo2.jpg...
        },
        SONGS: [
            // Pon aquí los nombres reales de tus archivos en la carpeta audio
            'audio/cancion1.mp3', 
            'audio/cancion2.mp3',
            'audio/cancion3.mp3' 
        ],
        FRASES: [
            "Eres mi todo ❤️",
            "2 años y 2 meses maravillosos",
            "Siempre juntos mi amor",
            "Gracias por tanto",
            "Eres la dueña de mi corazón",
            "Te amo Nini"
        ],
        CARTA: `Hola mi amor... 🌹

Hoy celebramos 2 años y 2 meses de una historia increíble.
Desde aquel 15 de diciembre de 2023, mi vida cambió para siempre. 

Gracias por ser mi compañera, mi mejor amiga y mi todo.
Te prometo seguir cuidando este amor cada día.

Eres mi presente y mi futuro.

Te amo inmensamente.`
    };

    // 1. CONTROL DE ACCESO
    const loginScreen = document.getElementById('loginScreen');
    const passInput = document.getElementById('passwordInput');
    const loginBtn = document.getElementById('loginBtn');
    
    function checkLogin() {
        if(passInput.value === "1512") { // CLAVE
            loginScreen.classList.add('login-hidden');
            setTimeout(() => {
                loginScreen.remove();
                new bootstrap.Modal(document.getElementById('welcomeModal')).show();
                confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            }, 800);
        } else {
            passInput.classList.add('is-invalid');
            document.getElementById('errorMsg').style.display = 'block';
            setTimeout(() => passInput.classList.remove('is-invalid'), 1000);
        }
    }
    
    loginBtn.addEventListener('click', checkLogin);
    passInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkLogin() });

    // 2. CONTADOR DE TIEMPO
    function updateCounter() {
        const now = new Date();
        const diff = now - CONFIG.START_DATE;

        let years = now.getFullYear() - CONFIG.START_DATE.getFullYear();
        let months = now.getMonth() - CONFIG.START_DATE.getMonth();
        let days = now.getDate() - CONFIG.START_DATE.getDate();

        if (days < 0) {
            months--;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        const hours = Math.floor((diff % 86400000) / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);

        const container = document.getElementById('contador-amor');
        container.innerHTML = `
            ${createBox(years, 'Años')}
            ${createBox(months, 'Meses')}
            ${createBox(days, 'Días')}
            ${createBox(hours, 'Hrs')}
            ${createBox(minutes, 'Min')}
            ${createBox(seconds, 'Seg')}
        `;
    }

    function createBox(val, label) {
        return `<div class="time-box fade-in">
                    <span class="time-val">${val}</span>
                    <span class="time-label">${label}</span>
                </div>`;
    }
    setInterval(updateCounter, 1000);
    updateCounter();

    // 3. CARRUSEL INTELIGENTE (LAZY LOADING)
    const carouselInner = document.getElementById('carouselContainer');
    const phraseElement = document.getElementById('carouselPhrase');
    
    // Generar índices aleatorios para que las fotos salgan en distinto orden siempre
    let imageIndices = Array.from({length: CONFIG.CAROUSEL.TOTAL_IMAGES}, (_, i) => i + 1);
    imageIndices.sort(() => Math.random() - 0.5);

    imageIndices.forEach((num, index) => {
        const div = document.createElement('div');
        div.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        // TRUCO DE OPTIMIZACIÓN: Solo la primera foto carga "eager", las demás "lazy"
        const loadingMode = index === 0 ? 'eager' : 'lazy';
        
        div.innerHTML = `
            <img src="${CONFIG.CAROUSEL.PATH}${num}.jpg" 
                 loading="${loadingMode}"
                 class="d-block w-100" 
                 alt="Recuerdo ${num}"
                 onerror="this.src='https://via.placeholder.com/400x600?text=Foto+No+Encontrada'">
        `;
        carouselInner.appendChild(div);
    });

    // Cambiar frase al deslizar
    const carouselEl = document.getElementById('photoCarousel');
    carouselEl.addEventListener('slide.bs.carousel', () => {
        const randomPhrase = CONFIG.FRASES[Math.floor(Math.random() * CONFIG.FRASES.length)];
        phraseElement.style.opacity = 0;
        setTimeout(() => {
            phraseElement.textContent = randomPhrase;
            phraseElement.style.opacity = 1;
        }, 300);
    });
    phraseElement.textContent = CONFIG.FRASES[0];

    // 4. MÚSICA
    const audio = document.getElementById('backgroundMusic');
    const playBtn = document.getElementById('playPauseButton');
    const title = document.getElementById('songTitle');
    let currentSongIndex = 0;

    function loadSong(index) {
        if(CONFIG.SONGS.length === 0) return;
        currentSongIndex = index;
        audio.src = CONFIG.SONGS[currentSongIndex];
        title.textContent = `🎵 Reproduciendo: ${CONFIG.SONGS[currentSongIndex].split('/').pop()}`;
    }

    playBtn.addEventListener('click', () => {
        if (!audio.src) loadSong(0);
        if (audio.paused) {
            audio.play().catch(e => alert("Interactúa con la página primero"));
            playBtn.innerHTML = '<i class="fas fa-pause fa-lg"></i>';
        } else {
            audio.pause();
            playBtn.innerHTML = '<i class="fas fa-play fa-lg"></i>';
        }
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        loadSong((currentSongIndex + 1) % CONFIG.SONGS.length);
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-pause fa-lg"></i>';
    });
    
    document.getElementById('prevButton').addEventListener('click', () => {
        loadSong((currentSongIndex - 1 + CONFIG.SONGS.length) % CONFIG.SONGS.length);
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-pause fa-lg"></i>';
    });

    // 5. CARTA MÁQUINA DE ESCRIBIR
    const cartaBtn = document.getElementById('verCartaBtn');
    const cartaDiv = document.getElementById('cartaContent');
    const cartaTexto = document.getElementById('cartaTexto');
    let cartaEscribiendo = false;

    cartaBtn.addEventListener('click', () => {
        if (cartaDiv.style.display === 'none') {
            cartaDiv.style.display = 'block';
            cartaBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Ocultar Carta';
            
            // Efecto de escritura solo si está vacío
            if (!cartaTexto.innerHTML && !cartaEscribiendo) {
                cartaEscribiendo = true;
                let i = 0;
                const speed = 40; // Velocidad de escritura
                function type() {
                    if (i < CONFIG.CARTA.length) {
                        cartaTexto.innerHTML += CONFIG.CARTA.charAt(i);
                        i++;
                        setTimeout(type, speed);
                    } else {
                        cartaEscribiendo = false;
                    }
                }
                type();
            }
        } else {
            cartaDiv.style.display = 'none';
            cartaBtn.innerHTML = '<i class="fas fa-envelope-open-text"></i> Leer Carta 💌';
        }
    });

    // 6. GENERADOR DE CORAZONES
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 400);
});
