
const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


let sort_Crug = document.querySelector('.sort_Crug');
let sortiv = document.querySelector('.sortiv');


let sortiv_num = document.querySelector('.sortiv_num');
let sortiv_num2 = document.querySelector('.sortiv_num2');

sortiv_num.addEventListener('click', () => {
  sort_Crug.innerHTML = '36'
  sort_Crug.style.margin = '132px'

})

sortiv_num2.addEventListener('click', () => {
  sort_Crug.style.margin = '191px'
  sort_Crug.innerHTML = '24'
})
sortiv.addEventListener('click', () => {
  sort_Crug.style.margin = '0px'
  sort_Crug.innerHTML = 'Показать всё'
})


let acc = document.getElementsByClassName("filter__Item");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

let acc2 = document.getElementsByClassName("classification__Item");
let changeC = document.querySelector(".changeC");
let increment;



for (increment = 0; increment < acc2.length; increment++) {
  acc2[increment].addEventListener("click", function () {
    this.classList.toggle("active");
    let classification___Box = this.nextElementSibling;
    if (classification___Box.style.maxHeight) {
      classification___Box.style.maxHeight = null;

    } else {
      classification___Box.style.maxHeight = classification___Box.scrollHeight + "px";

      console.log('dsf');


    }
  });
}

let acc3 = document.getElementsByClassName("CFI2");
let changeCS = document.querySelector('.CFI2');
let increment3;

for (increment3 = 0; increment3 < acc3.length; increment3++) {
  acc3[increment3].addEventListener("click", function () {
    this.classList.toggle("active");
    let classification___Box2 = this.nextElementSibling;
    if (classification___Box2.style.maxHeight) {
      classification___Box2.style.maxHeight = null;

    } else {
      classification___Box2.style.maxHeight = classification___Box2.scrollHeight + "px";
      console.log('dsf');


    }
  });
}




changeC.addEventListener('click', () => {
  changeC.classList.toggle('changeJs')

})

changeCS.addEventListener('click', () => {
  changeCS.classList.toggle('changeJsS')
})

let viewList = document.querySelector('.view-list');
let viewGrid = document.querySelector('.view-grid');
let viewChange = document.querySelector('.viewChange');

// let inc = 0;
// var image = document.querySelector(".viewChangeImg");
// var imgs = ['log', 'gol'];
// image.src = imgs[inc];
// if (inc > 2) {
//   inc = 0;
// }
// function imgsrc() {

//   inc++;
//   image.src = imgs[inc];

// }

viewList.addEventListener('click', () => {
  viewChange.style = 'transform: translate(0px)';
  imgsrc();
})

viewGrid.addEventListener('click', () => {
  viewChange.style = 'transform: translate(50px)';
  imgsrc();

})



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


let group = document.querySelector('.group');
let group__dropdown = document.querySelector('.group__dropdown');


group.addEventListener('click', () => {
  group__dropdown.classList.add('group__dropdownActive');
})





/*Dropdown Menu*/
$('.group').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.group').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.group .dropdown-menu li').click(function () {
  // $(this).parents('.group').find('span').text($(this).text());
  $(this).parents('.group').find('input').attr('value', $(this).attr('id'));
});

