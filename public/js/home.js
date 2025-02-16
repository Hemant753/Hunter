let t1 = gsap.timeline();

// Loader animation: Fill the loader bar
t1.to(".loader", {
    width: "100%",
    duration: 3,
    ease: "power2.inOut",
});

// Logo animation: Scale up
t1.to(".logo", {
    scale: 3,
    duration: 1.5,
});

// Loader wrapper: Slide down and fade out
t1.to(".loader-wrapper", {
    y: 200,
    opacity: 0,
    duration: 1.5,
    delay: -1.5, // Overlap with the previous animation
});

// Shirt animation: Appear and scale up with a bounce effect
t1.to(".shirt", {
    scale: 1.2,
    opacity: 1,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    duration: 2.5,
    ease: "back.out(1.7)",
});

// Logo color reset
t1.to(".logo", {
    duration: 2,
    filter: "invert(0%)",
});

// Body background color transition
t1.to("body", {
    // backgroundImage: "url('/image/bg.jpg')",
    backgroundColor: "white",
    duration: 0.5,
    delay: -2,
});

// Navbar fade-in and slide-down
t1.to(".navbar", {
    opacity: 1,
    y: 20,
    duration: 1.5,
    delay: -2,
});

// Shirt bounce animation: Infinite loop with smooth easing
t1.to(".shirt", {
    y: -15,
    duration: 2,
    yoyo: true,
    repeat: -1, // Infinite loop
    ease: "power1.inOut",
});

// Counter Animation Function
function customerCount(counterElement, target) {
    const duration = 2000; // Duration in milliseconds
    const increment = Math.ceil(target / (duration / 50)); // Increment per frame
    let currentCount = 0;

    const countUp = () => {
        currentCount += increment;
        if (currentCount >= target) {
            counterElement.textContent = `${target}+`;
        } else {
            counterElement.textContent = `${currentCount}+`;
            requestAnimationFrame(countUp); // Smooth frame updates
        }
    };

    countUp(); // Start the animation
}

// Initialize counters after animations
setTimeout(() => {
    customerCount(document.getElementById('customer-counter'), 2500);
    customerCount(document.getElementById('product-counter'), 200);
}, 7000); // Delay for initial animations
