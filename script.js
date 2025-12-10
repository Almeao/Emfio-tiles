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




// Function to animate .header_top height and border based on scroll position
function animateHeaderOnScroll() {
  const headerTop = document.querySelector('.header_top');
  if (!headerTop) return;
  const currentScrollY = window.scrollY;

  if (currentScrollY > 10) {
    // Scroll Y > 2: height 5vh and border bottom
    gsap.to(headerTop, {
      height: "5vh",
      borderBottom: "0.5px solid #00000065",
      duration: 0.4,
      ease: "expoScale(1,2,power2.inOut)",

      overwrite: "auto"
    });
  } else {
    // Scroll Y <= 2: height 10vh and remove border bottom
    gsap.to(headerTop, {
      height: "10vh",
      borderBottom: "none",
      duration: 0.4,
      ease: "expoScale(1,2,power2.inOut)",
      overwrite: "auto"
    });
  }
}

// Attach function to the 'scroll' event of the window
window.addEventListener('scroll', animateHeaderOnScroll);

// Also, set on page load to ensure correct state
animateHeaderOnScroll();





// Animate entire header hide on scroll down, show on scroll up
(function () {
  const header = document.querySelector('header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 10) {
      // Scrolling down, hide header
      gsap.to(header, {
        y: "-100%",
        duration: 1,
        ease: "power4.out",
        overwrite: true
      });
    } else {
      // Scrolling up, show header
      gsap.to(header, {
        y: "0%",
        duration: 1,
        ease: "power4.out",
        overwrite: true
      });
    }
    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
})();





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
      filter: "blur(15px)",
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
      filter: "blur(15px)",
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






gsap.from(".part4_main_animation_image", {
  scale: 9,
  duration: 0.7,
  ease: "expoScale(1,2,power4.inOut)",
  scrollTrigger: {
    trigger: ".part4",
    start: "top 10%",    // When .part4's top enters 80% of the viewport height
    once: true,          // Only play once
    toggleActions: "play none none none",
  },
  onComplete: () => {
    // The issue was with your selector: "part4 img" is missing the dot for class, should be ".part4 img".
    // Also, document.querySelector only selects the FIRST image, so only the first image moves.
    // If you want to move ALL images at once, use document.querySelectorAll to get a NodeList.
    // Then animate all of them inside a loop or with gsap.utils.toArray.

    const imgs = document.querySelectorAll(".part4 img");
    let currentPosition = 0;
    const stepSize = 100;  // If each image is 25% width
    const numImages = imgs.length;
    const maxLimit = numImages * stepSize;

    function moveSlider() {
      currentPosition -= stepSize;
      imgs.forEach(img => {
        gsap.to(img, {
          xPercent: currentPosition,
          duration: 1,
          ease: "power2.inOut",
          delay: 2,
          onComplete: () => {
            // Only trigger reset on the last image to avoid multiple resets
            if (img === imgs[imgs.length - 1]) {
              if (Math.abs(currentPosition) >= maxLimit) {
                currentPosition = 0;
                imgs.forEach(img2 => gsap.set(img2, { xPercent: 0 }));
              }
              moveSlider();
            }
          }
        });
      });
    }

    if (imgs.length > 1) moveSlider();
  }
  }

);
