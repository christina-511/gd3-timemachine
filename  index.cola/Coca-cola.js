window.onload = function () {
  var ballDiv = document.querySelector('.balls')

  // Some random colors
  const colors = ['#c1573c', '#733424', '#C43A3F', '#F6E3E4', '#4E1719']

  const numBalls = 500
  const balls = []

  for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    ball.style.background = colors[Math.floor(Math.random() * colors.length)]
    const canvas = document.getElementById('canvas')
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`
    ball.style.transform = `scale(${Math.random()})`
    ball.style.width = `${Math.random()}em`
    ball.style.height = ball.style.width

    balls.push(ball)
    ballDiv.append(ball)
  }

  // Keyframes
  balls.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 80 === 0 ? -21 : 21),
      y: Math.random() * 200,
    }

    let anim = el.animate(
      [
        { transform: 'translate(0, 0)' },
        { transform: `translate(${to.x}rem, ${to.y}rem)` },
      ],
      {
        duration: (Math.random() + 3) * 2300, // random duration
        direction: 'alternate',
        fill: 'both',
        iterations: Infinity,
        easing: 'ease-in-out',
      }
    )
  })
}
gsap.registerPlugin(ScrollTrigger)

let masks = document.querySelectorAll('.mask')

masks.forEach((mask) => {
  let image = mask.querySelector('img')

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: mask,
      toggleActions: 'restart none none reset',
    },
  })

  tl.set(mask, { autoAlpha: 1 })

  tl.from(mask, 1.5, {
    xPercent: -100,
    ease: Power2.out,
  })
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out,
  })
})
