document.addEventListener("DOMContentLoaded", () => {
    // === CONFIGURACIÓN ===
    const CONFIG = {
        START_DATE: new Date('2023-12-15T00:00:00'), // FECHA DE INICIO DE LA RELACIÓN
        CAROUSEL: {
            INTERVAL: 4000,
            TOTAL_IMAGES: 120, 
            IMAGE_PATH: './img/photo' // Se asume que los archivos son photo1.jpg, photo2.jpg...
        },
        MODAL: {
            DELAY: 800
        },
        PHRASES: [
            "Eres la razón por la que sonrío cada día.",
            "Tu amor llena mi vida de colores hermosos.",
            "Cada momento contigo es un regalo invaluable.",
            "Eres mi sol en los días nublados.",
            "No hay sueño más dulce que estar a tu lado.",
            "Contigo aprendí que el amor es la fuerza más poderosa.",
            "Eres mi estrella guía, incluso en las noches más oscuras.",
            "Cada mirada tuya ilumina mi alma.",
            "El tiempo contigo siempre pasa demasiado rápido.",
            "Tu risa es la melodía más hermosa que conozco.",
            "Juntos podemos conquistar cualquier obstáculo.",
            "El mundo es más bello porque tú estás en él.",
            "Tu amor es mi refugio en las tormentas de la vida.",
            "Eres mi motivo favorito para creer en los milagros.",
            "Tu sonrisa es el idioma universal de la felicidad.",
            "Cuando estoy contigo, el tiempo se detiene y todo es perfecto.",
            "Eres la razón por la que mi corazón late con alegría.",
            "Amar y ser amado por ti es el mayor privilegio de mi vida.",
            "Eres mi poema favorito escrito por la vida.",
            "Cada día contigo es un capítulo lleno de felicidad.",
            "Eres el inicio y el final de mis sueños más dulces.",
            "Eres la inspiración detrás de cada cosa hermosa que veo.",
            "En tus ojos encuentro un universo lleno de amor.",
            "Agradezco al destino por cruzar nuestros caminos.",
            "Tenerte en mi vida es la definición de suerte.",
            "Tu amor me hace sentir que todo es posible.",
            "Eres mi hogar, mi paz y mi felicidad.",
            "Cada palabra tuya es un poema que atesoro.",
            "Gracias por convertir cada día ordinario en algo extraordinario.",
            "Eres el tesoro que nunca dejaré de cuidar.",
            "El amor que compartimos me hace invencible.",
            "Eres mi flor favorita en el jardín de la vida.",
            "La vida contigo sabe más dulce que la miel.",
            "Tu cariño es el fuego que calienta mi corazón.",
            "Eres la melodía que da sentido a mi canción.",
            "Tu abrazo es mi lugar seguro en el mundo.",
            "Cada paso contigo es un viaje lleno de alegría.",
            "Eres mi arcoíris después de cada tormenta.",
            "Tu bondad ilumina el mundo de quienes te rodean.",
            "Contigo aprendí que el amor verdadero existe.",
            "Eres mi para siempre en un mundo lleno de momentos fugaces.",
            "Tu amor es el tesoro más grande que podría desear.",
            "Gracias por ser el mejor capítulo de mi historia.",
            "Eres mi hoy, mi mañana y mi eternidad.",
            "Amarte es el privilegio más grande de mi vida.",
            "Eres la prueba de que los ángeles caminan entre nosotros.",
            "Cada palabra tuya es un bálsamo para mi corazón.",
            "En tus brazos encontré mi paraíso personal.",
            "Eres mi amanecer favorito, lleno de esperanza y belleza.",
            "Gracias por ser la razón de mi felicidad infinita.",
            "Tu presencia en mi vida es el mayor regalo del universo.",
            "Eres la chispa que enciende la llama de mi alma.",
            "Tu amor es la brújula que me guía hacia la felicidad.",
            "Cada vez que pienso en ti, sonrío sin razón aparente.",
            "Eres la joya más preciosa de mi vida.",
            "Tu amor es mi refugio y mi fortaleza.",
            "Eres mi más hermosa casualidad.",
            "En cada foto contigo veo reflejada mi felicidad.",
            "Eres el viento que impulsa mis sueños más altos.",
            "Tu luz interior brilla más que cualquier estrella.",
            "Amarte es tan fácil como respirar.",
            "Eres la razón por la que mi vida tiene sentido.",
            "Cada día contigo es un nuevo comienzo lleno de amor.",
            "Tu presencia hace que mi mundo sea más brillante.",
            "Eres el motivo de mis más dulces pensamientos.",
            "Tu amor me da fuerzas para ser mejor cada día.",
            "Eres el regalo más hermoso que me ha dado la vida.",
            "No hay un rincón de mi corazón donde no estés.",
            "Eres la inspiración que mueve mi vida.",
            "El amor que compartimos es mi mayor tesoro.",
            "Eres mi motivo favorito para creer en la magia.",
            "Tu amor es la mejor decisión que tomé.",
            "Eres mi poema eterno en este libro llamado vida.",
            "Tu risa ilumina hasta el día más gris.",
            "Cada segundo contigo es una bendición.",
            "Eres el sueño del que nunca quiero despertar.",
            "Amarte es mi mayor logro.",
            "Tu corazón es el lugar donde siempre quiero estar.",
            "Eres el faro que guía mis pasos hacia la felicidad.",
            "Tu voz es la música que da vida a mi alma.",
            "Eres la reina de mi mundo.",
            "Tu amor es mi constante en un mundo lleno de cambios.",
            "Gracias por ser el mejor regalo que la vida me dio.",
            "Eres la razón por la que creo en los cuentos de hadas.",
            "Tu amor es el pincel que colorea mi mundo.",
            "Eres mi estrella fugaz, mi deseo cumplido.",
            "Cada sonrisa tuya es un recordatorio de lo afortunado que soy.",
            "Eres mi luz en la oscuridad, mi sol en la tormenta.",
            "Tu amor es mi mayor bendición.",
            "Eres el único idioma que mi corazón entiende.",
            "Tu amor es la melodía que alegra mis días.",
            "Contigo, el amor es una aventura infinita.",
            "Eres mi siempre, mi todo, mi vida blanquita hermosa."
        ],
        SONGS: [
             "audio/cancion1.mp3", "audio/cancion2.mp3", "audio/cancion3.mp3", "audio/cancion4.mp3",
             "audio/cancion5.mp3", "audio/cancion6.mp3", "audio/cancion7.mp3", "audio/cancion8.mp3",
             "audio/cancion9.mp3", "audio/cancion10.mp3", "audio/cancion11.mp3", "audio/cancion12.mp3",
             "audio/cancion13.mp3", "audio/cancion14.mp3", "audio/cancion15.mp3", "audio/cancion16.mp3",
             "audio/cancion17.mp3", "audio/cancion18.mp3", "audio/cancion19.mp3", "audio/cancion20.mp3",
             "audio/cancion21.mp3", "audio/cancion22.mp3", "audio/cancion23.mp3", "audio/cancion24.mp3",
             "audio/cancion25.mp3", "audio/cancion26.mp3", "audio/cancion27.mp3", "audio/cancion28.mp3"
        ]
    };

    // === CLASE CONTADOR (NUEVA) ===
    class TimeCounter {
        constructor(startDate, containerId) {
            this.startDate = startDate;
            this.container = document.getElementById(containerId);
            this.start();
        }

        calculate() {
            const now = new Date();
            let years = now.getFullYear() - this.startDate.getFullYear();
            let months = now.getMonth() - this.startDate.getMonth();
            let days = now.getDate() - this.startDate.getDate();
            
            // Ajuste de días negativos
            if (days < 0) {
                months--;
                const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += lastMonth.getDate();
            }
            // Ajuste de meses negativos
            if (months < 0) {
                years--;
                months += 12;
            }

            // Cálculo de tiempo para horas/min/seg
            const diff = now - this.startDate;
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            return { years, months, days, hours, minutes, seconds };
        }

        render() {
            const t = this.calculate();
            this.container.innerHTML = `
                <div class="time-box"><span class="time-val">${t.years}</span><span class="time-label">Años</span></div>
                <div class="time-box"><span class="time-val">${t.months}</span><span class="time-label">Meses</span></div>
                <div class="time-box"><span class="time-val">${t.days}</span><span class="time-label">Días</span></div>
                <div class="time-box"><span class="time-val">${t.hours}</span><span class="time-label">Hrs</span></div>
                <div class="time-box"><span class="time-val">${t.minutes}</span><span class="time-label">Min</span></div>
                <div class="time-box"><span class="time-val">${t.seconds}</span><span class="time-label">Seg</span></div>
            `;
        }

        start() {
            this.render();
            setInterval(() => this.render(), 1000);
        }
    }

    // === CLASE REPRODUCTOR (TU LÓGICA) ===
    class MusicPlayer {
        constructor(elements) {
            this.elements = elements;
            this.state = {
                currentSongIndex: 0,
                isPlaying: false,
                isRepeating: false,
                isShuffling: false
            };
            this.initializeEventListeners();
        }

        initializeEventListeners() {
            this.elements.music.addEventListener("ended", () => this.handleSongEnd());
            this.elements.playPauseButton?.addEventListener("click", () => this.togglePlayPause());
            this.elements.nextButton?.addEventListener("click", () => this.nextTrack());
            this.elements.prevButton?.addEventListener("click", () => this.prevTrack());
            this.elements.repeatButton?.addEventListener("click", () => this.toggleRepeat());
            this.elements.shuffleButton?.addEventListener("click", () => this.toggleShuffle());
            this.elements.volumeControl?.addEventListener("input", (e) => this.setVolume(e.target.value));
        }

        async playSong(index) {
            try {
                this.elements.music.src = CONFIG.SONGS[index];
                await this.elements.music.play();
                this.updatePlayPauseButton(true);
                this.state.isPlaying = true;
                this.updateSongTitle(index);
            } catch (error) {
                console.error('Error al reproducir:', error);
            }
        }

        togglePlayPause() {
            if (this.state.isPlaying) {
                this.elements.music.pause();
                this.updatePlayPauseButton(false);
            } else {
                if (!this.elements.music.src) this.elements.music.src = CONFIG.SONGS[this.state.currentSongIndex];
                this.elements.music.play();
                this.updatePlayPauseButton(true);
                this.updateSongTitle(this.state.currentSongIndex);
            }
            this.state.isPlaying = !this.state.isPlaying;
        }

        updatePlayPauseButton(isPlaying) {
            this.elements.playPauseButton.innerHTML = `<i class="fas fa-${isPlaying ? 'pause' : 'play'}"></i>`;
        }

        getRandomSongIndex() {
            const available = CONFIG.SONGS.map((_, i) => i).filter(i => i !== this.state.currentSongIndex);
            return available[Math.floor(Math.random() * available.length)];
        }

        nextTrack() {
            this.state.currentSongIndex = this.state.isShuffling 
                ? this.getRandomSongIndex() 
                : (this.state.currentSongIndex + 1) % CONFIG.SONGS.length;
            this.playSong(this.state.currentSongIndex);
        }

        prevTrack() {
            this.state.currentSongIndex = (this.state.currentSongIndex - 1 + CONFIG.SONGS.length) % CONFIG.SONGS.length;
            this.playSong(this.state.currentSongIndex);
        }

        toggleRepeat() {
            this.state.isRepeating = !this.state.isRepeating;
            this.elements.repeatButton.classList.toggle("active", this.state.isRepeating);
            this.elements.repeatButton.classList.toggle("btn-danger", this.state.isRepeating);
            this.elements.repeatButton.classList.toggle("btn-outline-danger", !this.state.isRepeating);
        }

        toggleShuffle() {
            this.state.isShuffling = !this.state.isShuffling;
            this.elements.shuffleButton.classList.toggle("active", this.state.isShuffling);
            this.elements.shuffleButton.classList.toggle("btn-danger", this.state.isShuffling);
            this.elements.shuffleButton.classList.toggle("btn-outline-danger", !this.state.isShuffling);
        }

        setVolume(value) {
            this.elements.music.volume = value;
        }

        handleSongEnd() {
            this.state.isRepeating ? this.playSong(this.state.currentSongIndex) : this.nextTrack();
        }

        updateSongTitle(index) {
            if (this.elements.songTitle) {
                // Intenta limpiar el nombre del archivo para mostrar algo bonito
                let name = CONFIG.SONGS[index].split('/').pop().replace('.mp3', '').replace(/_/g, ' ');
                this.elements.songTitle.textContent = `🎵 Reproduciendo: ${name}`;
            }
        }
    }

 // === CLASE CARRUSEL OPTIMIZADA ===
    class Carousel {
        constructor(elements) {
            this.elements = elements;
            this.currentPhraseIndex = 0;
            this.initialize();
        }

        async initialize() {
            await this.loadImages();
            this.initializeCarousel();
            // Mostrar primera frase sin esperar al slide
            this.updatePhrase('next'); 
        }

        async loadImages() {
            const shuffledIndices = this.getShuffledImageIndices();
            // Mapeamos para crear los elementos
            const carouselItems = shuffledIndices.map((imageIndex, i) => this.createCarouselItem(imageIndex, i === 0));
            this.elements.carouselInner.append(...carouselItems);
        }

        getShuffledImageIndices() {
            const indices = Array.from({ length: CONFIG.CAROUSEL.TOTAL_IMAGES }, (_, i) => i + 1);
            return indices.sort(() => Math.random() - 0.5);
        }

        createCarouselItem(imageIndex, isActive) {
            const div = document.createElement("div");
            div.className = `carousel-item${isActive ? ' active' : ''}`;
            
            const img = document.createElement("img");
            img.src = `${CONFIG.CAROUSEL.IMAGE_PATH}${imageIndex}.jpg`;
            img.alt = `Recuerdo ${imageIndex}`;
            
            // CAMBIO: Quitamos loading="lazy" para que responda más rápido al pasar fotos
            // Si son muchas fotos y pesa mucho, el navegador las gestionará, 
            // pero para la experiencia de usuario rápida, mejor que carguen normal.
            img.className = "d-block w-100 img-fluid";
            
            // Manejo de error por si falta una foto
            img.onerror = function() { this.parentElement.style.display = "none"; }; 
            
            div.appendChild(img);
            return div;
        }

        initializeCarousel() {
            // Inicializamos Bootstrap Carousel
            const bsCarousel = new bootstrap.Carousel(this.elements.carousel, {
                interval: CONFIG.CAROUSEL.INTERVAL,
                pause: false, // No pausar si el mouse está encima
                wrap: true,   // Permitir que de la última pase a la primera
                touch: true   // Permitir deslizar con el dedo en celular
            });

            // Escuchamos el evento de deslizar para cambiar la frase
            this.elements.carousel.addEventListener("slide.bs.carousel", (event) => {
                // event.direction nos dice 'left' (siguiente) o 'right' (anterior)
                // Ojo: En Bootstrap 'left' suele ser ir a next y 'right' a prev.
                this.updatePhrase(event.direction);
            });
        }

        updatePhrase(direction) {
            // Lógica inteligente para las frases
            if (direction === 'right') {
                // Si vamos para atrás, restamos al índice
                this.currentPhraseIndex--;
                if (this.currentPhraseIndex < 0) {
                    this.currentPhraseIndex = CONFIG.PHRASES.length - 1;
                }
            } else {
                // Si vamos para adelante (o carga inicial), sumamos
                this.currentPhraseIndex = (this.currentPhraseIndex + 1) % CONFIG.PHRASES.length;
            }

            const phrase = CONFIG.PHRASES[this.currentPhraseIndex];
            
            // Actualizar textos con pequeña animación de opacidad
            if (this.elements.phraseElement) {
                this.elements.phraseElement.style.opacity = 0;
                setTimeout(() => {
                    this.elements.phraseElement.textContent = phrase;
                    this.elements.phraseElement.style.opacity = 1;
                }, 200); // Pequeño delay para que coincida con el cambio de foto
            }
            
            if (this.elements.mobilePhrase) {
                this.elements.mobilePhrase.textContent = phrase;
            }
        }
    }
    // === INICIALIZACIÓN ===
    const elements = {
        welcomeModal: document.getElementById("welcomeModal"),
        carousel: document.querySelector("#photoCarousel"),
        phraseElement: document.getElementById("carouselPhrase"),
        mobilePhrase: document.getElementById("mobilePhrase"), // Añadido para móvil
        music: document.getElementById("backgroundMusic"),
        playPauseButton: document.getElementById("playPauseButton"),
        prevButton: document.getElementById("prevButton"),
        nextButton: document.getElementById("nextButton"),
        repeatButton: document.getElementById("repeatButton"),
        shuffleButton: document.getElementById("shuffleButton"),
        volumeControl: document.getElementById("volumeControl"),
        songTitle: document.getElementById("songTitle"),
        carouselInner: document.querySelector("#photoCarousel .carousel-inner"),
        verCartaBtn: document.getElementById('verCartaBtn'),
        cartaContent: document.getElementById('cartaContent')
    };

    // 1. Iniciar Modal
    const welcomeModal = new bootstrap.Modal(elements.welcomeModal);
    setTimeout(() => welcomeModal.show(), CONFIG.MODAL.DELAY);

    // 2. Iniciar Contador (NUEVO)
    new TimeCounter(CONFIG.START_DATE, 'contador-amor');

    // 3. Iniciar Música y Carrusel
    const musicPlayer = new MusicPlayer(elements);
    const carousel = new Carousel(elements);

    // 4. Lógica de la Carta
    elements.verCartaBtn?.addEventListener('click', () => {
        const isHidden = elements.cartaContent.style.display === 'none';
        elements.cartaContent.style.display = isHidden ? 'block' : 'none';
        elements.verCartaBtn.textContent = isHidden ? 'Ocultar Carta 🙈' : 'Leer Carta 💌';
        if(isHidden) elements.cartaContent.scrollIntoView({ behavior: 'smooth' });
    });
    // === EFECTO DE LLUVIA DE CORAZONES ===
document.getElementById('loveButton').addEventListener('click', () => {
    // Lanza confeti con forma de corazones
    var defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['heart'],
        colors: ['#FFC0CB', '#FF69B4', '#FF1493', '#C71585']
    };

    confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2
    });

    confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3
    });

    confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4
    });
    // === LÓGICA DEL CANDADO DE AMOR ===
document.addEventListener('DOMContentLoaded', () => {
    const loginScreen = document.getElementById('loginScreen');
    const passInput = document.getElementById('passwordInput');
    const loginBtn = document.getElementById('loginBtn');
    const errorMsg = document.getElementById('errorMsg');
    const music = document.getElementById('backgroundMusic');

    // LA CONTRASEÑA (Cámbiala aquí si quieres)
    const SECRET_CODE = "1512"; 

    function checkLogin() {
        if(passInput.value === SECRET_CODE) {
            // 1. Ocultar pantalla de bloqueo
            loginScreen.classList.add('login-hidden');
            
            // 2. Iniciar música automáticamente
            music.play().catch(e => console.log("Navegador bloqueó audio auto:", e));
            
            // 3. Lanzar confeti de celebración (si tienes la librería)
            if(window.confetti) {
                confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            }
            
            // 4. Eliminar el bloqueo del DOM después de la animación
            setTimeout(() => {
                loginScreen.remove();
            }, 1000);
        } else {
            // Contraseña incorrecta
            errorMsg.style.display = 'block';
            passInput.value = '';
            passInput.focus();
            
            // Animación de "vibración"
            passInput.classList.add('is-invalid');
            setTimeout(() => passInput.classList.remove('is-invalid'), 500);
        }
    }

    // Eventos (Click en botón o Enter en teclado)
    loginBtn.addEventListener('click', checkLogin);
    passInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkLogin();
    });
});
