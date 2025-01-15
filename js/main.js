const mouseFollower = document.querySelector('.mouse-follower');
const mouseAura = document.querySelector('.mouse-aura');
const heroTitle = document.querySelector('.hero-title');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(mouseFollower, {
        x: mouseX - 6,
        y: mouseY - 6,
        duration: 0.1
    });

    gsap.to(mouseAura, {
        x: mouseX - 20,
        y: mouseY - 20,
        duration: 0.15
    });
});

heroTitle.addEventListener('mousemove', (e) => {
    const rect = heroTitle.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (x - centerX) * 0.04;
    const deltaY = (y - centerY) * 0.04;

    gsap.to(heroTitle, {
        x: deltaX,
        y: deltaY,
        rotateX: deltaY * 0.05,
        rotateY: -deltaX * 0.05,
        duration: 0.75,
        ease: 'power2.out'
    });

    gsap.to(mouseFollower, {
        scale: 2.5,
        duration: 0.3
    });

    gsap.to(mouseAura, {
        scale: 2,
        duration: 0.3
    });
});

heroTitle.addEventListener('mouseleave', () => {
    gsap.to(heroTitle, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.75,
        ease: 'power2.out'
    });

    gsap.to(mouseFollower, {
        scale: 1,
        duration: 0.3
    });

    gsap.to(mouseAura, {
        scale: 1,
        duration: 0.3
    });
});

gsap.from(heroTitle, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
});

gsap.from('.hero-subtitle', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
});

const glowOrbs = document.querySelectorAll('.glow-orb');

glowOrbs.forEach(orb => {
    gsap.to(orb, {
        x: 'random(-150, 150)',
        y: 'random(-150, 150)',
        duration: 'random(8, 12)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}); 