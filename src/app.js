const Typed = require('typed.js')
const Konami = require('konami')
const harrisImage = require('./harris-potter.png')

new Typed('.Proof', {
  strings: [
    'When Harris dressed as Steve Jobs, everyone could really tell that he was Harry Potter.',
    'When you <code>/giphy harris &lt;keyword&gt;</code>, a gif of Harry Potter usually shows up.',
    'Both Harris and Harry have hair.',
    'Harris is the same age as Harry Potter.',
    'Harry Potter spelled backwards is Harris.',
    'Harris is admittedly half wizard.',
    'Harris dislikes Voldemort a lot.',
    'Harris has the same middle name as Harry Potter.',
    'Harris is really good at that game they play where you fly on a broom and hit a ball with magic and stuff.',
    'Harry Potter is engaged to a woman named Lucy.',
    'Harry Potter was born in the same hospital as Harris.',
    'Harris used to live in a closet in his uncle’s house.',
    'Harris went to Hogwarts School of Witchcraft and Wizardry for his undergrad.',
    'Harris’ best friends are named Ron and Hermione.',
    'Harris spelled backwards is Harry Potter.',
    'Both Harris and Harry only wear eyeglasses for fashion purposes.',
    'Harris dislikes Walnut wands, they always break.'
  ],
  typeSpeed: 40,
  shuffle: true,
  showCursor: false,
  smartBackspace: true,
  loop: true
})

new Konami(() => {
  const harris = document.querySelector('.Harris')

  harris.innerHTML = `
    <img 
      src='${harrisImage}' 
      alt='Harris is Harry Potter' 
    />
  `

  harris.classList.add('Harris--show')
  setTimeout(() => {
    // Empty the div
    while (harris.firstChild) {
      harris.removeChild(harris.firstChild)
    }

    harris.classList.remove('Harris--show')
  }, 5000)
})
