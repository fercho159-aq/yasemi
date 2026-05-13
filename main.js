document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader Logic
    const preloader = document.getElementById('preloader');
    const counter = document.querySelector('#preloader .counter');
    let count = 0;

    if (preloader && counter) {
        const interval = setInterval(() => {
            count += Math.floor(Math.random() * 10) + 1;
            if (count >= 100) {
                count = 100;
                clearInterval(interval);
                setTimeout(() => {
                    preloader.classList.add('loaded');
                }, 500);
            }
            counter.innerText = count + '%';
        }, 50);
    }

    // 2. Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Scroll Progress Logic (Top Bar)
    const scrollLineFill = document.querySelector('.scroll-line-fill');

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        
        if (scrollLineFill) {
            scrollLineFill.style.width = scrolled + '%';
        }

        // --- NUEVO SISTEMA HORIZONTAL ROBUSTO ---
        const horizontalWrapper = document.getElementById('horizontal-wrapper');
        const horizontalTrack = document.getElementById('horizontal-track');

        if (window.innerWidth >= 1024 && horizontalWrapper && horizontalTrack) {
            // 1. Calcular el ancho total a mover
            const trackWidth = horizontalTrack.scrollWidth;
            // 2. Ajustar la altura del wrapper para que 1px de scroll = 1px de movimiento
            // Añadimos el viewportHeight para que el scroll termine exactamente cuando se vea el último pixel
            horizontalWrapper.style.height = `${trackWidth}px`;

            // 3. Variables para cálculo
            const wrapperOffsetTop = horizontalWrapper.offsetTop;
            const viewportHeight = window.innerHeight;
            const maxScrollDistance = trackWidth - viewportHeight;
            const maxMoveX = trackWidth - window.innerWidth;

            // 4. Calcular el progreso
            let scrollDistance = window.scrollY - wrapperOffsetTop;
            let scrollProgress = scrollDistance / maxScrollDistance;
            
            // Limitar entre 0 y 1
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));
            
            // 5. Mover exacto
            const moveX = scrollProgress * maxMoveX; 
            horizontalTrack.style.transform = `translateX(-${moveX}px)`;

        }
    });

    // 5. Navbar Scroll Effect
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

