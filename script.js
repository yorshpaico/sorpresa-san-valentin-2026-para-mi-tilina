document.addEventListener("DOMContentLoaded", () => {
    // Configuración
    const CONFIG = {
        CAROUSEL: {
            INTERVAL: 5000,
            TOTAL_IMAGES: 74,
            IMAGE_PATH: './img/photo'
        },
        MODAL: {
            DELAY: 1000
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
            "audio/cancion1.mp3",
            "audio/cancion2.mp3",
            "audio/cancion3.mp3",
            "audio/cancion4.mp3",
            "audio/cancion5.mp3",
            "audio/cancion6.mp3",
            "audio/cancion7.mp3",
            "audio/cancion8.mp3",
            "audio/cancion9.mp3",
            "audio/cancion10.mp3",
            "audio/cancion11.mp3",
            "audio/cancion12.mp3",
            "audio/cancion13.mp3",
            "audio/cancion14.mp3",
            "audio/cancion15.mp3",
            "audio/cancion16.mp3",
            "audio/cancion17.mp3",
            "audio/cancion18.mp3",
            "audio/cancion19.mp3",
            "audio/cancion20.mp3",
            "audio/cancion21.mp3",
            "audio/cancion22.mp3",
            "audio/cancion23.mp3",
            "audio/cancion24.mp3",
            "audio/cancion25.mp3",
            "audio/cancion26.mp3",
            "audio/cancion27.mp3",
            "audio/cancion28.mp3"
        ]
    };

    // Clase para gestionar el reproductor de música
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
                console.error('Error al reproducir la canción:', error);
            }
        }

        togglePlayPause() {
            this.state.isPlaying ? this.elements.music.pause() : this.elements.music.play();
            this.state.isPlaying = !this.state.isPlaying;
            this.updatePlayPauseButton(this.state.isPlaying);
        }

        updatePlayPauseButton(isPlaying) {
            this.elements.playPauseButton.innerHTML = `<i class="fas fa-${isPlaying ? 'pause' : 'play'}"></i>`;
        }

        getRandomSongIndex() {
            const availableIndices = Array.from(
                { length: CONFIG.SONGS.length },
                (_, i) => i
            ).filter(i => i !== this.state.currentSongIndex);
            return availableIndices[Math.floor(Math.random() * availableIndices.length)];
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
        }

        toggleShuffle() {
            this.state.isShuffling = !this.state.isShuffling;
            this.elements.shuffleButton.classList.toggle("active", this.state.isShuffling);
        }

        setVolume(value) {
            this.elements.music.volume = value;
        }

        handleSongEnd() {
            if (this.state.isRepeating) {
                this.playSong(this.state.currentSongIndex);
            } else {
                this.nextTrack();
            }
        }

        updateSongTitle(index) {
            if (this.elements.songTitle) {
                this.elements.songTitle.textContent = `Reproduciendo: Canción ${index + 1}`;
            }
        }
    }

    // Clase para gestionar el carrusel
    class Carousel {
        constructor(elements) {
            this.elements = elements;
            this.currentPhraseIndex = 0;
            this.initialize();
        }

        async initialize() {
            await this.loadImages();
            this.initializeCarousel();
            this.updatePhrase();
        }

        async loadImages() {
            const shuffledIndices = this.getShuffledImageIndices();
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
            img.alt = `Imagen destacada ${imageIndex}`;
            img.loading = "lazy";
            img.className = "d-block w-100 img-fluid";

            div.appendChild(img);
            return div;
        }

        initializeCarousel() {
            new bootstrap.Carousel(this.elements.carousel, {
                interval: CONFIG.CAROUSEL.INTERVAL,
                pause: false
            });

            this.elements.carousel.addEventListener("slide.bs.carousel", () => this.updatePhrase());
        }

        updatePhrase() {
            if (this.elements.phraseElement) {
                this.elements.phraseElement.textContent = CONFIG.PHRASES[this.currentPhraseIndex];
                this.currentPhraseIndex = (this.currentPhraseIndex + 1) % CONFIG.PHRASES.length;
            }
        }
    }

    // Inicialización de componentes
    const elements = {
        welcomeModal: document.getElementById("welcomeModal"),
        carousel: document.querySelector("#photoCarousel"),
        phraseElement: document.getElementById("carouselPhrase"),
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

    // Inicializar modal de bienvenida
    const welcomeModal = new bootstrap.Modal(elements.welcomeModal);
    setTimeout(() => welcomeModal.show(), CONFIG.MODAL.DELAY);

    // Inicializar reproductor de música y carrusel
    const musicPlayer = new MusicPlayer(elements);
    const carousel = new Carousel(elements);

    // Manejar botón de carta
    elements.verCartaBtn?.addEventListener('click', () => {
        const isHidden = elements.cartaContent.style.display === 'none' || elements.cartaContent.style.display === '';
        elements.cartaContent.style.display = isHidden ? 'block' : 'none';
        elements.verCartaBtn.textContent = isHidden ? 'Ocultar Carta' : 'Ver Carta';
    });
});