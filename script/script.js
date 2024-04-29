gsap.registerPlugin(ScrollTrigger)

gsap.to('.scrollIndic', {
      y: -15,
      duration: 1,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
})