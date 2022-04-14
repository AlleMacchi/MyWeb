// Slipt text into words
const text = document.querySelector('.textIntro');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime.timeline({
  loop: true
})
.add({
  targets: '.textIntro span, .Logo',
  translateY: [-600, 0],
  scale: [10,1],
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1500,
  delay: anime.stagger(100),
})
.add({
  targets: '.textIntro span, .Logo',
  translateX: [0, -1000],
  scale: [1,1],
  opacity: [1,0],
  easing: "easeOutExpo",
  duration: 2000,
  delay: anime.stagger(100),
})
.add({
  targets: '.textIntro span,.Logo',
  translateX: [1000, 0],
  scale: [1,1],
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 2000,
  delay: anime.stagger(100),
})
.add({
  targets: '.textIntro span, .Logo',
  translateX: [0, 0],
  scale: [1,50],
  opacity: [1,0],
  easing: "easeOutExpo",
  duration: 2000,
  delay: anime.stagger(100),
})
