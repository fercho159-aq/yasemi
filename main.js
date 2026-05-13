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
    const horizontalWrapper = document.querySelector('.horizontal-wrapper');
    const horizontalContent = document.querySelector('.horizontal-content');

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        
        if (scrollLineFill) {
            scrollLineFill.style.width = scrolled + '%';
        }

        // 4. Horizontal Scroll Logic (Desktop Only)
        if (window.innerWidth >= 1024 && horizontalWrapper && horizontalContent) {
            const wrapperOffsetTop = horizontalWrapper.offsetTop;
            const wrapperHeight = horizontalWrapper.offsetHeight;
            const stickyHeight = window.innerHeight;
            
            // Calculate how much has been scrolled within the wrapper
            let scrollProgress = (window.scrollY - wrapperOffsetTop) / (wrapperHeight - stickyHeight);
            
            // Clamp between 0 and 1
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));
            
            // Move the content (5 modules = 400% movement)
            const movePercentage = scrollProgress * 400; 
            horizontalContent.style.transform = `translateX(-${movePercentage}%)`;

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

