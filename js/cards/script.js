
let language_Togler = document.querySelector('.language_Togler');
let language = document.querySelector('.language');


language.addEventListener('click', () => {
    language_Togler.classList.toggle('change')
})


let signin = document.querySelector('.signin');
let popap = document.querySelector('.popap');
let popap__close = document.querySelector('.popap__close');
let body = document.querySelector('body')

signin.addEventListener('click', () => {
  popap.classList.add('popap__active');
  body.classList.add('bodystop');
  console.log('sadf');
})

popap__close.addEventListener('click', () => {
  popap.classList.remove('popap__active');
  body.classList.remove('bodystop');

})