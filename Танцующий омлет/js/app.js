const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}})

// // Cookie-jump
tl.fromTo('.egg', {y: 0}, {y: 30, yoyo: true, repeat: -1, duration: 0.5}, '<')
tl.fromTo('#Vector_6', {rotation: '0deg'}, {rotation: '100deg', yoyo: true, repeat: -1, transformOrigin: '100% 100%', duration: 0.5}, '<')
tl.fromTo('#Vector_7', {rotation: '0deg'}, {rotation: '100deg', yoyo: true, repeat: -1, transformOrigin: '100% 100%', duration: 0.5}, '<')

tl.fromTo('#Vector_8', {rotation: '0deg'}, {rotation: '90deg', yoyo: true, repeat: -1, transformOrigin: '0% 0%', duration: 0.5}, '<')
tl.fromTo('#Vector_8', {rotation: '90deg'}, {rotation: '0deg', yoyo: true, repeat: -1, transformOrigin: '0% 0%', duration: 0.5}, '<')


tl.fromTo('#Vector_10', {x: '-45deg'}, {rotation: '-90deg', yoyo: true, repeat: -1, transformOrigin: '0% 100%', duration: 0.5}, '<')


tl.fromTo('#Ellipse_2', {rotation: '60deg'}, {rotation: '90deg', yoyo: true, repeat: -1, transformOrigin: '0% 0%', duration: 1}, '<')
tl.fromTo('#Vector_9', {y: -10, rotation: '0deg'}, {y: 0, rotation: '-20deg', yoyo: true, repeat: -1, duration: 0.5}, '<')
tl.fromTo('#Vector_11', {y: -10, rotation: '-20deg'}, {y: 0, rotation: '0deg', yoyo: true, repeat: -1, duration: 0.5}, '<')

tl.fromTo('#Yahoo', {y: 10, x: 0, opacity: 1, rotation: '0deg'}, {y: -50, x: 20, opacity: 0, rotation: '-10deg', repeat: -1, duration: 3}, '<')
tl.fromTo('#Yahoo_2', {y: 20, x: 0, opacity: 1, rotation: '30deg'}, {y: -30, x: 30, opacity: 0, rotation: '10deg', repeat: -1, duration: 2}, '<')

const button = document.querySelector('button')
button.addEventListener('click', () => {
    gsap.to('.egg__container', {opacity: 0, y: 100, duration: 0.75, ease: "power1.out"})

})