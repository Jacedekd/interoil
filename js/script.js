

let language_Togler = document.querySelector('.language_Togler');
let language = document.querySelector('.language');


language.addEventListener('click', () => {
  language_Togler.classList.toggle('change')
})

let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector(".toolbar__block");
let toolbarGroup2 = document.querySelector('.toolbarGroup2');
let toolbar__iconBlock = document.querySelector('.toolbar__iconBlock');
let popap__body = document.querySelector('.popap__body');


hamburger.addEventListener("click", function () {

  hamburger.classList.toggle("is-active");
  ul.classList.toggle("is-active");
  toolbar__iconBlock.classList.toggle("is-active");
  // popap__body.classList.add('popapPosition');

  document.getElementById("menu-bg").classList.toggle("change-bg");
  toolbarGroup2.classList.toggle("is-active");



});



// let gp = document.querySelector('.rsignin');

let signin = document.querySelector('.signin');
let popap = document.querySelector('.popap');
let popap__close = document.querySelector('.popap__close');
let body = document.querySelector('body');

const popap__active = () => {
  popap.classList.add('popap__active');
  body.classList.add('bodystop');
  toolbar__iconBlock.classList.toggle("is-active");
  hamburger.classList.remove("is-active");
  ul.classList.remove("is-active");
  toolbarGroup2.classList.remove("is-active");
  toolbar__iconBlock.classList.remove("is-active");
  document.getElementById("menu-bg").classList.remove("change-bg");
}

const popap__notactive = () => {
  popap.classList.remove('popap__active');
  body.classList.remove('bodystop');
}
signin.addEventListener('click', () => {
  popap__active();

})
// gp.addEventListener('click', () => {
//   popap__active();
// })

popap__close.addEventListener('click', () => {
  popap__notactive();
})

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
let classificationAPI = document.querySelector('.classificationAPI');
let increment5;

classificationAPI.addEventListener("click", function () {
  this.classList.toggle("activeA");
});

let acc4 = document.getElementsByClassName("CFI3");
let increment4;

for (increment4 = 0; increment4 < acc4.length; increment4++) {
  acc4[increment4].addEventListener("click", function () {
    this.classList.toggle("activeS");
  });
}
let filter__brandGp = document.querySelector(".filter__brandGp");

filter__brandGp.addEventListener("click", function () {
  this.classList.toggle("activeF");
});

filter__brandGp


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





let group__arrow = document.getElementsByClassName('.group__arrow');

let group = document.getElementsByClassName('group');

let ic;

// [].slice.call(group__arrow).forEach(function(b) {
//   b.addEventListener('click', function() {
//     [].slice.call(group__arrow).forEach(function(b1) {
//       b1.classList[b1 === b ? 'add': 'remove']('arr__active');
//     });
//   });
// })

for (ic = 0; ic < group.length; ic++) {
  group[ic].addEventListener("click", function () {
    group.classList.toggle("activeS");

  });
}


/*Dropdown Menu*/
$('.group').click(function () {
  $(this).attr('tabindex', 1).focus();
  // $(".group__arrow").attr('tabindex', 1).focus();
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





$(".img_svg").each(function () {
  var $img = $(this);
  var imgClass = $img.attr("class");
  var imgURL = $img.attr("src");
  $.get(imgURL, function (data) {
    var $svg = $(data).find("svg");
    if (typeof imgClass !== "undefined") {
      $svg = $svg.attr("class", imgClass + " replaced-svg");
    }
    $svg = $svg.removeAttr("xmlns:a");
    if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
      $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
    }
    $img.replaceWith($svg);
  }, "xml");
});