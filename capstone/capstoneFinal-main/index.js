window.addEventListener('load', function () {
    'use strict';
    const sliderContent = document.querySelector('.a');

    // How wide is the original set of images?
    const sliderWidth = sliderContent.offsetWidth;

    // clone the set of images and assign them the class name of '.b'
    const cloned = sliderContent.cloneNode(true);
    cloned.className = "b";

    // add the clone to the DOM
    document.querySelector('.slider').appendChild(cloned);

    //get the :root element
    let root = document.querySelector(':root');

    // set the end of the left position based on the width of the slider
    const endLeftPos = `-${sliderWidth}px`;    
    root.style.setProperty('--sliderwidth', endLeftPos);

    //Add the animate class to start animating the slider
    document.querySelector('.slider').classList.add("animate");

    //

        //JS for scroll animation
        ScrollReveal({
            reset: true,
            distance: '60px',
            duration: 2500,
            delay: 400
        });
        ScrollReveal().reveal(".sec2", {delay:400, origin: 'right'});
        ScrollReveal().reveal("#begin", {delay:500, origin: 'right'});
        ScrollReveal().reveal(".sec3 .left", {delay:700, origin: 'left'});
        ScrollReveal().reveal(".sec3 .right", {delay:800, origin: 'right'});
        ScrollReveal().reveal(".footer", {delay: 850, origin: 'left'});

    //top text 
    const elts = {
        text1: document.getElementById("text1"),
        text2: document.getElementById("text2")
    };
    
    const texts = [
        "106 Years",
        "150 symbols",
        "Infinite Meaning",
    ];
    
    const morphTime = 1;
    const cooldownTime = 1;
    
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    
    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    
    function doMorph() {
        morph -= cooldown;
        cooldown = 0;
    
        let fraction = morph / morphTime;
    
        if (fraction > 1) {
            cooldown = cooldownTime;
            fraction = 1;
        }
    
        setMorph(fraction);
    }
    
    function setMorph(fraction) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }
    
    function doCooldown() {
        morph = 0;
    
        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";
    
        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
    }
    
    function animate() {
        requestAnimationFrame(animate);
    
        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;
    
        cooldown -= dt;
    
        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                textIndex++;
            }
    
            doMorph();
        } else {
            doCooldown();
        }
    }
    
    animate();
});

