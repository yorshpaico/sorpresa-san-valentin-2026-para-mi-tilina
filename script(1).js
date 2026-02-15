document.addEventListener("DOMContentLoaded", () => {
    const CONFIG = {
        START_DATE: new Date('2023-12-15T00:00:00'),
        CAROUSEL: { 
            INTERVAL: 4500, 
            TOTAL_IMAGES: 100, // Ajusta este número al total de fotos (JPG) que subas
            IMAGE_PATH: './img/photo' 
        },
        PHRASES: [
            "Eres la razón por la que sonrío cada día.",
            "Tu amor llena mi vida de colores.",
            "Cada momento contigo es un regalo.",
            "Eres mi sol en los días nublados.",
            "Tu risa es la melodía más hermosa.",
            "Contigo todo es perfecto.",
            "Eres mi hoy, mi mañana y mi siempre.",
            "Amo cada detalle de ti.",
            "Gracias por ser mi paz.",
            "Eres mi vida blanquita hermosa.",
            "No hay lugar mejor que tus brazos.",
            "Agradezco al destino por ti.",
            "Cada día a tu lado es una nueva aventura.",
            "Eres el sueño del que nunca quiero despertar.",
            "Tu amor es mi refugio favorito.",
            "No cambiaría ni un segundo de lo que hemos vivido.",
            "Eres la pieza que le faltaba a mi rompecabezas.",
            "Gracias por hacerme el hombre más feliz del mundo.",
            "Te amo más de lo que las palabras pueden expresar.",
            "Eres mi persona favorita en todo el universo.",
            "Cada mirada tuya me vuelve a enamorar.",
            "Juntos somos el mejor equipo.",
            "Eres mi luz, mi guía y mi motor.",
            "Nuestro amor es mi historia favorita.",
            "Por muchos meses y años más de pura felicidad."
        ],
        SONGS: Array.from({length: 28}, (_, i) => `audio/cancion${i+1}.mp3`)
    };

    // 1. Lógica del Contador
    class TimeCounter {
        constructor(startDate, containerId) {
            this.startDate = startDate;
            this.container = document.getElementById(containerId);
            if(this.container) setInterval(() => this.render(), 1000);
            this.render();
        }
        render() {
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
            const h = Math.floor((diff % 86400000) / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            this.container.innerHTML = `
                <div class="time-box"><span class="time-val">${years}</span><span class="time-label">Años</span></div>
                <div class="time-box"><span class="time-val">${months}</span><span class="time-label">Meses</span></div>
                <div class="time-box"><span class="time-val">${days}</span><span class="time-label">Días</span></div>
                <div class="time-box"><span class="time-val">${h}</span><span class="time-label">Hrs</span></div>
                <div class="time-box"><span class="time-val">${m}</span><span class="time-label">Min</span></div>
                <div class="time-box"><span class="time-val">${s}</span><span class="time-label">Seg</span></div>
            `;
        }
    }

    // 2. Lógica de Música
    class MusicPlayer {
        constructor() {
            this.audio = document.getElementById('backgroundMusic');
            this.playBtn = document.getElementById('playPauseButton');
            this.title = document.getElementById('songTitle');
            this.vol = document.getElementById('volumeControl');
            this.shuffBtn = document.getElementById('shuffleButton');
            this.repBtn = document.getElementById('repeatButton');
            this.idx = 0;
            this.isPlaying = false;
            this.isShuffling = false;
            this.isRepeating = false;
            this.init();
        }
        init() {
            this.playBtn.onclick = () => this.toggle();
            document.getElementById('nextButton').onclick = () => this.next();
            document.getElementById('prevButton').onclick = () => this.prev();
            this.vol.oninput = (e) => this.audio.volume = e.target.value;
            this.audio.onended = () => this.isRepeating ? this.audio.play() : this.next();
            this.shuffBtn.onclick = () => {
                this.isShuffling = !this.isShuffling;
                this.shuffBtn.classList.toggle('btn-danger', this.isShuffling);
            };
            this.repBtn.onclick = () => {
                this.isRepeating = !this.isRepeating;
                this.repBtn.classList.toggle('btn-danger', this.isRepeating);
            };
        }
        load(i) {
            this.idx = i;
            this.audio.src = CONFIG.SONGS[i];
            this.title.textContent = `🎵 Reproduciendo: Canción ${i + 1}`;
        }
        toggle() {
            if(!this.audio.src) this.load(0);
            if (this.isPlaying) {
                this.audio.pause();
            } else {
                this.audio.play();
            }
            this.isPlaying = !this.isPlaying;
            this.playBtn.innerHTML = `<i class="fas fa-${this.isPlaying ? 'pause' : 'play'}"></i>`;
        }
        next() {
            let n = this.isShuffling ? Math.floor(Math.random() * CONFIG.SONGS.length) : (this.idx + 1) % CONFIG.SONGS.length;
            this.load(n);
            this.audio.play();
            this.isPlaying = true;
            this.playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
        }
        prev() {
            this.idx = (this.idx - 1 + CONFIG.SONGS.length) % CONFIG.SONGS.length;
            this.load(this.idx);
            this.audio.play();
        }
    }

    // 3. Lógica Carrusel
    class CarouselManager {
        constructor() {
            this.cont = document.getElementById('carouselContainer');
            this.pEl = document.getElementById('carouselPhrase');
            this.mEl = document.getElementById('mobilePhrase');
            this.idx = 0;
            this.init();
        }
        init() {
            // Aleatorizar el orden de las imágenes
            const ids = Array.from({length: CONFIG.CAROUSEL.TOTAL_IMAGES}, (_, i) => i + 1).sort(() => Math.random() - 0.5);
            ids.forEach((n, i) => {
                const div = document.createElement('div');
                div.className = `carousel-item ${i === 0 ? 'active' : ''}`;
                // Solo JPG para asegurar compatibilidad total
                div.innerHTML = `<img src="${CONFIG.CAROUSEL.IMAGE_PATH}${n}.jpg" loading="eager" onerror="this.parentElement.remove()">`;
                this.cont.appendChild(div);
            });
            document.getElementById('photoCarousel').addEventListener('slide.bs.carousel', (e) => {
                this.idx = (this.idx + (e.direction === 'left' ? 1 : -1) + CONFIG.PHRASES.length) % CONFIG.PHRASES.length;
                const p = CONFIG.PHRASES[this.idx];
                if(this.pEl) {
                    this.pEl.style.opacity = 0;
                    setTimeout(() => {
                        this.pEl.textContent = p;
                        if(this.mEl) this.mEl.textContent = p;
                        this.pEl.style.opacity = 1;
                    }, 200);
                }
            });
            if(this.pEl) this.pEl.textContent = CONFIG.PHRASES[0];
        }
    }

    // Instanciar componentes
    new TimeCounter(CONFIG.START_DATE, 'contador-amor');
    const player = new MusicPlayer();
    new CarouselManager();

    // Lógica de Acceso
    const lBtn = document.getElementById('loginBtn');
    const pInp = document.getElementById('passwordInput');
    const lScr = document.getElementById('loginScreen');

    const loginAction = () => {
        if(pInp.value === "1512") {
            lScr.classList.add('login-hidden');
            setTimeout(() => {
                lScr.remove();
                const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
                welcomeModal.show();
                confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
                player.toggle(); 
            }, 800);
        } else {
            const errorMsg = document.getElementById('errorMsg');
            if(errorMsg) errorMsg.style.display = 'block';
            pInp.classList.add('is-invalid');
            setTimeout(() => pInp.classList.remove('is-invalid'), 500);
        }
    };

    if(lBtn) lBtn.onclick = loginAction;
    if(pInp) pInp.onkeypress = (e) => { if(e.key === 'Enter') loginAction(); };
    setTimeout(() => { if(pInp) pInp.focus(); }, 600);

    // Eventos de UI
    const verCarta = document.getElementById('verCartaBtn');
    if(verCarta) {
        verCarta.onclick = function() {
            const c = document.getElementById('cartaContent');
            const isHidden = c.style.display === 'none';
            c.style.display = isHidden ? 'block' : 'none';
            this.textContent = isHidden ? 'Ocultar Carta 🙈' : 'Leer Carta 💌';
        };
    }

    const loveBtn = document.getElementById('loveButton');
    if(loveBtn) {
        loveBtn.onclick = () => {
            confetti({ particleCount: 100, spread: 360, shapes: ['heart'], colors: ['#ff4757', '#ff6b81'] });
        };
    }

    // === GENERADOR DE CORAZONES ROMÁNTICOS ===
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.2;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    // Crear corazones periódicamente
    setInterval(createHeart, 800);

**Sugerencias adicionales:**
1.  **Sombras suaves:** He añadido sombras en tonos rosados (`rgba(255, 77, 109, 0.2)`) para que todo combine con el tema del amor.
2.  **Móvil:** He ajustado el carrusel para que en el celular se vea un poco más compacto y no se corte nada.

¡Con esto, la página se va a ver de película, mi rey! ¿Te gustaría que probemos algún color específico que le guste a ella? Por ejemplo, si prefiere el violeta o el azul cielo, podemos ajustar el degradado.
});
