function imgSvg(names) {
  $(names).each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(
      imgURL,
      function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
          $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"));
        }
        $img.replaceWith($svg);
      },
      "xml"
    );
  });
}

imgSvg('.img_svg');
imgSvg('.imgcatalog');
imgSvg('.sidebarImg');


let language_Togler = document.querySelector(".language_Togler");
let language = document.querySelector(".language");

language.addEventListener("click", () => {
  language_Togler.classList.toggle("change");
});

const logout = document.querySelector('.logout');
const logout__Body = document.querySelector('.logout__Body');
const BottomArrow = document.querySelector('.toolbar__BottomArrow');

if (logout != null) {
  logout.addEventListener('click', () => {
    logout__Body.classList.toggle('logout__is-active');
    BottomArrow.classList.toggle('BottomArrow__active')
  })
}

let history__all = document.querySelector('.history__all');
let trash__Main = document.querySelector('.trash__Main');

if (history__all != null) {
  history__all.addEventListener('click', () => {
    trash__Main.classList.add('trash__MainAdd');

  });
}


let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector(".toolbar__block");
let toolbarGroup2 = document.querySelector(".toolbarGroup2");
let toolbar__iconBlock = document.querySelector(".toolbar__iconBlock");
let popap__body = document.querySelector(".popap__body");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  ul.classList.toggle("is-active");
  toolbar__iconBlock.classList.toggle("is-active");
  document.querySelector("body").classList.toggle("oh");
  document.getElementById("menu-bg").classList.toggle("change-bg");
  toolbarGroup2.classList.toggle("is-active");
});

let signin = document.querySelector(".signin");
let popap = document.querySelector(".popap");
let popap__close = document.querySelector(".popap__close");
let body = document.querySelector("body");

const popap__active = () => {
  popap.classList.add("popap__active");
  body.classList.add("bodystop");
  toolbar__iconBlock.classList.toggle("is-active");
  hamburger.classList.remove("is-active");
  ul.classList.remove("is-active");
  toolbarGroup2.classList.remove("is-active");
  toolbar__iconBlock.classList.remove("is-active");
  document.getElementById("menu-bg").classList.remove("change-bg");
  popap__body.classList.add("popap__activeb");
};

const popap__notactive = () => {
  popap.classList.remove("popap__active");
  body.classList.remove("bodystop");
  popap__body.classList.remove("popap__activeb");
};

if (signin != null) {
  signin.addEventListener("click", () => {
    popap__active();
  });
}

if (popap__close != null) {
  popap__close.addEventListener("click", () => {
    popap__notactive();
  });
}
if (popap != null) {
  popap.addEventListener("click", () => {
    popap__notactive();
  });
}
let partnerArr = [
  {
    partnerTitle: 'Новопэк - Производство промышленной полимерной упаковки',
    partnerDesc: ' Новопэк является многолетним лидером на рынке полимерной упаковки, компания — готовая гарантировать качественный продукт соответствующий нормам Таможенного союза. Основанная в 2003 году, она уверенно прошла путь от небольшой фабрики регионального уровня, до одного из крупнейших промышленных комплексов на территории стран-участниц ЕАЭС. Завод оснащен современным оборудованием из Австрии, Италии, Турции и Тайваня, а в производстве используется лишь первичное полимерное сырье и высококачественные зарубежные добавки',
  },
  {
    partnerTitle: 'УКТМК',
    partnerDesc: 'Усть-Каменогорский титано-магниевый комбинат — казахстанский комбинат, полностью интегрированный производитель титана. Основным видом деятельности компании является производство высококачественной титановой губки, титановых слитков и магния марки Mg-90 для использования в авиационной промышленности и других отраслях.',
  },
  {
    partnerTitle: 'Агромаш Холдинг',
    partnerDesc: 'АО «АгромашХолдинг KZ» — системообразующее казахстанское предприятие, производитель сельхозтехники. •АО «АгромашХолдинг KZ» отечественное промышленное предприятие, производящее зерноуборочные и кормоуборочные комбайны, тракторы, сеялки, бороны и прочие комплектующие для сельскохозяйственной техники.',
  },
  {
    partnerTitle: 'Богатырь Комир',
    partnerDesc: 'У́гольный разре́з Богатырь — угледобывающее предприятие, расположенное в городе Экибастузе, Казахстан. Входит в состав ТОО «Богатырь Көмір».',
  },
  {
    partnerTitle: 'ArcelorMittal',
    partnerDesc: 'ArcelorMittal, «Арсело́р Ми́ттал» — крупнейшая металлургическая компания в мире, на конец 2008 года контролировавшая 10 % мирового рынка стали. Зарегистрирована в Люксембурге. Имеет производственные мощности в 18 странах на 4 континентах, продукция реализуется в 160 государствах.',
  },
  {
    partnerTitle: 'Казахстанские железные дороги',
    partnerDesc: '«Казахстан темир жолы» — крупнейший оператор магистральной железнодорожной сети Казахстана. Полное наименование — Акционерное общество «Национальная компания „Қазақстан темір жолы“». Главный офис КТЖ — в столице Казахстана Нур-Султан. В структуру холдинга «Казахстан темир жолы» входят компании: «Ремлокомотив»;',
  },
  {
    partnerTitle: 'Samruk-Energy',
    partnerDesc: 'АО «Самрук-Энерго». Крупнейший государственный многопрофильный энергетический холдинг Казахстана, успешно интегрированный в международный энергобаланс',
  },
  {
    partnerTitle: 'МТЗ - КАЗАХСТАН',
    partnerDesc: 'Завод по производству тракторов «БЕЛАРУС» в Республике Казахстан - ТОО Машиностроительный завод МТЗ-Казахстан» был создан 1 сентября 2018 года.',
  },
  {
    partnerTitle: 'САУТС-ОЙЛ',
    partnerDesc: 'Компания «САУТС-ОЙЛ» заслуженно считается одним из наиболее успешных и динамично развивающихся предприятий на нефтегазовом рынке Казахстана. Основная сфера нашей деятельности – добыча углеводородного сырья в перспективном Кызылординском регионе.',
  },
]

let partnersImg = document.querySelectorAll('.partnersImg');

let partnersFull__Img = document.querySelector('.partnersFull__Img img'),
  partnersFull__Title = document.querySelector('.partnersFull__Title'),
  partnersFull__Desc = document.querySelector('.partnersFull__Desc');

partnersImg.forEach((item) => {
  item.addEventListener('click', () => {
    partnersFull__Img.src = item.firstChild.attributes[1].value;
    for (let i = 0; i < 9; i++) {
      if (item.firstChild.id === `parner${i}`) {
        partnersFull__Title.innerHTML = partnerArr[i].partnerTitle;
        partnersFull__Desc.innerHTML = partnerArr[i].partnerDesc;
      }
    }
  })
})

const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


// const swiper2 = new Swiper(".swiper2", {
//   // Optional parameters

//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },

// });

let sort_Crug = document.querySelector(".sort_Crug");
let sortiv = document.querySelector(".sortiv");

let sortiv_num = document.querySelector(".sortiv_num");
let sortiv_num2 = document.querySelector(".sortiv_num2");


if (sortiv_num != null) {
  sortiv_num.addEventListener("click", () => {
    sort_Crug.innerHTML = "36";
    sort_Crug.style.margin = "132px";
  });
}

if (sortiv_num2 != null) {
  sortiv_num2.addEventListener("click", () => {
    sort_Crug.style.margin = "191px";
    sort_Crug.innerHTML = "24";
  });
}

if (sortiv != null) {
  sortiv.addEventListener("click", () => {
    setTimeout(() => {
      sort_Crug.innerHTML = "Показать всё";
    }, 200)

    sort_Crug.style.margin = "0px";

  });
}

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

      console.log("dsf");
    }
  });
}

let acc3 = document.getElementsByClassName("CFI2");
let changeCS = document.querySelector(".CFI2");
let increment3;

for (increment3 = 0; increment3 < acc3.length; increment3++) {
  acc3[increment3].addEventListener("click", function () {
    this.classList.toggle("active");
    let classification___Box2 = this.nextElementSibling;
    if (classification___Box2.style.maxHeight) {
      classification___Box2.style.maxHeight = null;
    } else {
      classification___Box2.style.maxHeight = classification___Box2.scrollHeight + "px";
      console.log("dsf");
    }
  });
}

let classificationAPI = document.querySelector(".classificationAPI");
let classification__Title = document.querySelector(".classification__Title");

let increment5;
if (classification__Title != null) {
  classification__Title.addEventListener("click", function () {
    classificationAPI.classList.toggle("activeA");
  });
}

let acc4 = document.querySelector(".CFI3");
let acc4mode = document.querySelector(".CFI3mode");
let increment4;
if (acc4mode != null) {
  acc4mode.addEventListener("click", function () {
    acc4.classList.toggle("activeS");
  });
}

let filter__brandGp = document.querySelector(".filter__brandGp");
let filter__brand = document.querySelector(".filter__brand");

if (filter__brand != null) {
  filter__brand.addEventListener("click", function () {
    filter__brandGp.classList.toggle("activeF");
  });
}
if (changeC != null) {
  changeC.addEventListener("click", () => {
    changeC.classList.toggle("changeJs");
  });
}
if (changeCS != null) {
  changeCS.addEventListener("click", () => {
    changeCS.classList.toggle("changeJsS");
  });
}
let viewList = document.querySelector(".view-list");
let viewGrid = document.querySelector(".view-grid");
let viewChange = document.querySelector(".viewChange");
let viewChangeImg = document.querySelector(".viewChangeImg");

let imgsrc = function (imgList, transform) {
  let img = imgList;
  viewChangeImg.setAttribute('src', img);
  viewChange.style = transform;
};

if (viewList != null) {
  viewList.addEventListener("click", () => {
    imgsrc('./assets/img/viewlistorange.svg', "transform: translate(0px)");
  });
}


if (viewGrid != null) {
  viewGrid.addEventListener("click", () => {
    imgsrc('./assets/img/view-gridOrange.svg', "transform: translate(50px)");
  });
}

let group__arrow = document.getElementsByClassName(".group__arrow");

let group = document.getElementsByClassName("group");

let ic;

for (ic = 0; ic < group.length; ic++) {
  group[ic].addEventListener("click", function () {
    group.classList.toggle("activeS");
  });
}

/*Dropdown Menu*/
$(".group").click(function () {
  $(this).attr("tabindex", 1).focus();
  // $(".group__arrow").attr('tabindex', 1).focus();
  $(this).toggleClass("active");
  $(this).find(".dropdown-menu").slideToggle(300);
});
$(".group").focusout(function () {
  $(this).removeClass("active");
  $(this).find(".dropdown-menu").slideUp(300);
});
$(".group .dropdown-menu li").click(function () {
  // $(this).parents('.group').find('span').text($(this).text());
  $('#' + $(this).parents(".group").data('input')).val($(this).attr("value"))

  $(this).parents(".group").find("input").attr("value", $(this).attr("id"));
});



let content__blockText = document.querySelector(".content__blockText");
let content__blockTextspan = document.querySelector(".content__blockText span");

let content__block = document.querySelector(".contentTeg");

let checkboxes = document.querySelectorAll(".tag");

let listArray = [];

for (let checkbox of checkboxes) {
  checkbox.addEventListener("click", function () {
    // console.log(checkbox.data_names);
    if (this.checked) {
      console.log(this.labels[0].innerHTML);
      let div = document.createElement("div");
      div.innerHTML = this.labels[0].innerHTML;
      div.classList.add("content__blockText");
      listArray.push(div);
      for (i = 0; i < listArray.length; i++) {
        content__block.append(listArray[i]);
        console.log(listArray);
      }
    } else {
      let elem = listArray.find((item) => item.innerText === this.labels[0].innerHTML);
      let index = listArray.indexOf(elem);
      content__block.removeChild(listArray[index]);
      listArray.splice(index, 1);
    }
  });
}

for (let e of checkboxes) {
  e.onchange = changeTag;

  let div = document.createElement("div");
  let span = document.createElement("img");

  div.innerText = e.labels[0].innerHTML;
  div.classList.add("ltag");
  span.classList.add("lspan");
  span.setAttribute('src', '/front/assets/img/freeiconcancel.svg');

  span.innerText = '';
  span.onclick = function () {
    hidden.append(this.parentNode);
    e.checked = false;
  };
  div.append(span);

  e.target = div;
  e.checked ? checked.append(div) : hidden.append(div);
}

function changeTag() {
  this.checked ? checked.append(this.target) : hidden.append(this.target);
}

$('.searchInput').on('change', function (e) {
  $('#search').val($(this).val())
})


let changephoto = document.querySelector('.changephoto');
let photo__Input = document.querySelector('.photo__Input');
console.log(photo__Input);
changephoto.addEventListener('click', () => {
  $('.changephoto').trigger('')

})

