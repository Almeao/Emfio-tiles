// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

// const headerTopOption1 = document.querySelector('.header_top_option_1');
// const headerContainer1 = document.querySelector('.header_container_1');

// if (headerTopOption1 && headerContainer1) {
//     headerTopOption1.addEventListener('mouseenter', () => {
//         gsap.to(headerContainer1, {
//             opacity: 1,
//             scaleY: 1,
//             transformOrigin: "top top",
//             duration: 0.3,
//             scrub:5,
//             ease: "power4.inOut",
//           });
//         });
        
//         headerTopOption1.addEventListener('mouseleave', () => {
//           gsap.to(headerContainer1, {
//             opacity: 0,
//             transformOrigin: "top bottom",
//             scaleY: 0,
//             duration: 0.3,
//             scrub:5,
//             ease: "expoScale(1,2,power2.inOut)",
//         });
//     });
// }

// Hover to expand products curtain using GSAP animation
const btn = document.querySelector('.header_top_option_1');
const curtain = document.querySelector('.headder_container1_cover');
const headerTop = document.querySelector('.header_top');
const main = document.querySelector('main'); // Select the main tag

if (btn && curtain && headerTop && main) {
  // Prepare by forcing curtain closed and removing border-bottom, and clearing any blur
  gsap.set(curtain, { height: 0, clearProps: "opacity" });
  headerTop.style.borderBottom = "none";
  main.style.filter = "none";

  btn.addEventListener('mouseenter', () => {
    gsap.to(curtain, {
      height: "75vh",
      opacity: 1,
      scrub: 5,
      stagger: 5,
      duration: 0.4,
      ease: "expoScale(1,2,power2.in)",
      overwrite: "auto"
    });
    // Add border-bottom
    headerTop.style.borderBottom = "0.5px solid #00000065";

    // Add blur effect to main
    gsap.to(main, {
      filter: "blur(8px)",
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto"
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(curtain, {
      height: 0,
      opacity: 0,
      scrub: 5,
      stagger: 5,
      duration: 0.4,
      ease: "expoScale(1,2,power2.inOut)",
      overwrite: "auto"
    });
    // Remove border-bottom
    headerTop.style.borderBottom = "none";

    // Remove blur effect from main
    gsap.to(main, {
      filter: "none",
      duration: 0.3,
      ease: "power2.in",
      overwrite: "auto"
    });
  });
}
