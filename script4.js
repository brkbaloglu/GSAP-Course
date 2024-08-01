var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

main.addEventListener("click", function(dets){
    // console.log(dets.y);

    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    })
})