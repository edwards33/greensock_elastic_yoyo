import { TweenMax, Elastic } from "gsap"

const yoyoImg = document.querySelector("#imgyoyo")

TweenMax.to(yoyoImg, 0.75, {
  scale: 1.25,
  repeat: -1,
  yoyo: true,
  ease: Elastic.easeInOut
})
