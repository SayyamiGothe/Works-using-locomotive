function loading() {
    var tl = gsap.timeline()
    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 1,
        ease: "expo.out"
    })
    tl.from("#yellow2", {
        top: "-100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    });
    tl.to("#loader h1", {
        delay: 0.2,
        duration: 0.7,
        color: "black"
    });
    t1.to("#loader", {
        opacity: 0,

    });
    t1.to("#loader", {
        display: "none",
        y: 100
    });
}
loading()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
  smooth: true
});
