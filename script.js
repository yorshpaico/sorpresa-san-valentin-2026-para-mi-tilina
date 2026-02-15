document.addEventListener("DOMContentLoaded", () => {
    // === CONFIGURACIÓN ===
    const CONFIG = {
        START_DATE: new Date('2023-12-15T00:00:00'), // TU FECHA AQUÍ
        CAROUSEL: {
            INTERVAL: 4000,
            TOTAL_IMAGES: 74, // CAMBIA ESTO SI SUBES MÁS FOTOS
            IMAGE_PATH: './img/photo'
        },
        MODAL: {
            DELAY: 500
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

    // === CLASE CONTADOR ===
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
            
            if (days < 0) {
                months--;
                const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += lastMonth.getDate();
            }
            if (months < 0) {
                years--;
                months += 12;
            }

            const diff = now - this.startDate;
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            return { years, months, days, hours, minutes, seconds };
        }

        render() {
            const t = this.calculate();
            if(!this.container) return; 
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

    // === CLASE REPRODUCTOR ===
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
            this.
