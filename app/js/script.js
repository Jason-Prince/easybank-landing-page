const btnHamburger = document.querySelector('[data-toggleHamburger]')
const header = document.querySelector('[data-header]')
const overlay = document.querySelector('[data-overlay]')

btnHamburger.addEventListener('click', function () {
  console.log('clicked btnHamburger')
  if (!header.classList.contains('open')) {
    header.classList.add('open')
    overlay.classList.remove('fade-out')
    overlay.classList.add('fade-in')
  } else {
    header.classList.remove('open')
    overlay.classList.remove('fade-in')
    overlay.classList.add('fade-out')
  }
})
