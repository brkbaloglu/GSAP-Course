// gsap.to("#box", {
//     x: 1000,
//     duration: 2,
//     delay: 1
// })

// gsap.to("#box2", {
//     x: 500,
//     y: 500,
//     duration: 2,
//     delay: 1
// })


// gsap.to("#box1", {
//     x: 1200,
//     duration: 2,
//     delay: 1
// })

// gsap.from("#box2", {
//     x: 1200,
//     duration: 2,
//     delay: 1
// })


// gsap.to("#box1", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: "50%",
//     scale: 1 
// })

// STAGGER

// gsap.from("h1", {
//     // color: "red",
//     opacity: 0,
//     duration: 2,
//     y: 30,
//     delay: 1,
//     stagger: 1
//     // stagger: -1,
// })

// YOYO ANIMATION


// gsap.to("#box", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     repeat: -1,
//     yoyo: true
// })



// gsap.to("#box1", {
//     x: 1500,
//     rotate: 360,
//     duration: .77,
//     delay: .5
// })

// gsap.to("#box2", {
//     x: 1500,
//     backgroundColor: "yellow",
//     duration: 1.5,
//     delay: 2.5
// })

// gsap.to("#box3", {
//     x: 1500,
//     scale: .5,
//     borderRadius: "50%",
//     duration: 1.5,
//     delay: 4
// })

// Timeline

// var tl = gsap.timeline()

// tl.to("#box1", {
//     x: 1500,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1
// })

// tl.to("#box2", {
//     x: 1500,
//     duration: 1.5,
// })


// tl.to("#box3", {
//     x: 1500,
//     duration: 1.5,
// })


var tl = gsap.timeline()

tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: .5
})

tl.from("h4", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: .3
})


tl.from("h1", {
    y: 20,
    opacity: 0,
    duration: .5,
    scale: .2
})