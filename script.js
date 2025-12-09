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


const btn1 = document.querySelector('.header_top_option_1');
const curtain1 = document.querySelector('.headder_container1_cover');
const headerTop1 = document.querySelector('.header_top');
const main1 = document.querySelector('main');

if (btn1 && curtain1 && headerTop1 && main1) {
  gsap.set(curtain1, { height: 0, clearProps: "opacity" });
  headerTop1.style.borderBottom = "none";
  main1.style.filter = "none";

  let isOverBtn1 = false;
  let isOverCurtain1 = false;

  function showCurtain1() {
    gsap.to(curtain1, {
      height: "75vh",
      opacity: 1,
      scrub: 5,
      stagger: 5,
      duration: 0.4,
      ease: "expoScale(1,2,power2.in)",
      overwrite: "auto"
    });
    headerTop1.style.borderBottom = "0.5px solid #00000065";
    gsap.to(main1, {
      filter: "blur(8px)",
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto"
    });
  }

  function hideCurtain1() {
    gsap.to(curtain1, {
      height: 0,
      opacity: 0,
      scrub: 5,
      stagger: 5,
      duration: 0.4,
      ease: "expoScale(1,2,power2.inOut)",
      overwrite: "auto"
    });
    headerTop1.style.borderBottom = "none";
    gsap.to(main1, {
      filter: "none",
      duration: 0.3,
      ease: "power2.in",
      overwrite: "auto"
    });
  }

  btn1.addEventListener('mouseenter', () => {
    isOverBtn1 = true;
    showCurtain1();
  });

  btn1.addEventListener('mouseleave', () => {
    isOverBtn1 = false;
    // Only hide if not over .headder_container1_cover
    setTimeout(() => {
      if (!isOverBtn1 && !isOverCurtain1) hideCurtain1();
    }, 500);
  });

  curtain1.addEventListener('mouseenter', () => {
    isOverCurtain1 = true;
    showCurtain1();
  });

  curtain1.addEventListener('mouseleave', () => {
    isOverCurtain1 = false;
    // Only hide if not over .header_top_option_1
    setTimeout(() => {
      if (!isOverBtn1 && !isOverCurtain1) hideCurtain1();
    }, 10);
  });
}



// Animation for .headder_container2_cover (second curtain)
const btn2 = document.querySelector(".header_top_option_2");
const curtain2 = document.querySelector('.headder_container2_cover');
// const headerTop2 = document.querySelector('.header_top');
// const main2 = document.querySelector('main');

if (btn2 && curtain2 && main1) {
  gsap.set(curtain2, { height: 0, clearProps: "opacity" });
  headerTop1.style.borderBottom = "none";
  main1.style.filter = "none";

  let isOverBtn2 = false;
  let isOverCurtain2 = false;

  function showCurtain2() {
    gsap.to(curtain2, {
      height: "60vh",
      opacity: 1,
      scrub: 5,
      stagger: 5,
      duration: 0.4,
      ease: "expoScale(1,2,power2.in)",
      overwrite: "auto"
    });
    headerTop1.style.borderBottom = "0.5px solid #00000065";
    gsap.to(main1, {
      filter: "blur(8px)",
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto"
    });
  }

  function hideCurtain2() {
    gsap.to(curtain2, {
      height: 0,
      opacity: 0,
      scrub: 5,
      stagger: 5,
      duration: 0.4,
      ease: "expoScale(1,2,power2.inOut)",
      overwrite: "auto"
    });
    headerTop1.style.borderBottom = "none";
    gsap.to(main1, {
      filter: "none",
      duration: 0.3,
      ease: "power2.in",
      overwrite: "auto"
    });
  }

  btn2.addEventListener('mouseenter', () => {
    isOverBtn2 = true;
    showCurtain2();
  });

  btn2.addEventListener('mouseleave', () => {
    isOverBtn2 = false;
    setTimeout(() => {
      if (!isOverCurtain2 && !isOverBtn2) {
        hideCurtain2();
      }
    }, 500);
  });

  curtain2.addEventListener('mouseenter', () => {
    isOverCurtain2 = true;
    showCurtain2();
  });

  curtain2.addEventListener('mouseleave', () => {
    isOverCurtain2 = false;
    setTimeout(() => {
      if (!isOverBtn2 && !isOverCurtain2) {
        hideCurtain2();
      }
    }, 10);
  });

}
