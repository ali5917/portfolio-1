// lenis scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// splitting titles
const titles = gsap.utils.toArray('.text-wrapper p')
const tl = gsap.timeline({repeat: -1})
tl 
titles.forEach(title => {
  titleText = title.textContent
  splittedTitle = titleText.split("")
  clutter = ""
  splittedTitle.forEach(thisChar => {
    clutter += `<span>${thisChar}</span>`
  })
  title.innerHTML = clutter

  // animating titles
  const newTitles = title.querySelectorAll('span')
  tl
    .from(newTitles, {
      opacity: 0,
      y: 10,
      rotateX: -90,
      stagger: 0.03,
    }, "<")
    .to(newTitles, {
      opacity: 0,
      y: -10,
      rotateX: 90,
      stagger: 0.03,
    }, "<1.1");
})

// animating name, line
const ti = gsap.timeline()
ti
.from('.name', {
  opacity: 0,
  y: -40,
  duration: 1
})
.to('.line-1', {
  opacity: 1,
})
.to('.line-2', {
  opacity: 1,
}, "<")

.to('.icon i', {
  opacity: 1,
  delay: 1,
  y: 25,
  duration: 2,
  repeat: -1,
  ease: 'easeInOut',
})

// image move on hover
const myImg = document.querySelector('.my-img')
const myName = document.querySelector('h1')

myName.addEventListener('mouseenter', () => {
  const tl = gsap.timeline()
  tl.to('.my-img', {
    autoAlpha: 1,
    duration: 0.5
  })
})
myName.addEventListener('mousemove', (e) => {
  const xpos = e.clientX - myImg.offsetWidth / 2;
  const ypos = e.clientY - myImg.offsetHeight / 2;
  gsap.to(myImg, {
    x: xpos,
    y: ypos,
    duration: 0.5,
    ease: 'easeInOut'
  });
})

// linked link onclick
myImg.addEventListener('click', ()=> {
  window.open('https://www.linkedin.com/in/ali5917/', '_blank')
})

