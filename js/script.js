$(".img_svg").each(function () {
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


let language_Togler = document.querySelector(".language_Togler");
let language = document.querySelector(".language");

language.addEventListener("click", () => {
  language_Togler.classList.toggle("change");
});

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

signin.addEventListener("click", () => {
  popap__active();
});


popap__close.addEventListener("click", () => {
  popap__notactive();
});
popap.addEventListener("click", () => {
  popap__notactive();
});

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

let sort_Crug = document.querySelector(".sort_Crug");
let sortiv = document.querySelector(".sortiv");

let sortiv_num = document.querySelector(".sortiv_num");
let sortiv_num2 = document.querySelector(".sortiv_num2");

sortiv_num.addEventListener("click", () => {
  sort_Crug.innerHTML = "36";
  sort_Crug.style.margin = "132px";
});

sortiv_num2.addEventListener("click", () => {
  sort_Crug.style.margin = "191px";
  sort_Crug.innerHTML = "24";
});
sortiv.addEventListener("click", () => {
  setTimeout(() => {
    sort_Crug.innerHTML = "Показать всё";
  }, 200)

  sort_Crug.style.margin = "0px";

});

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

classification__Title.addEventListener("click", function () {
  classificationAPI.classList.toggle("activeA");
});

let acc4 = document.querySelector(".CFI3");
let acc4mode = document.querySelector(".CFI3mode");
let increment4;

acc4mode.addEventListener("click", function () {
  acc4.classList.toggle("activeS");
});

let filter__brandGp = document.querySelector(".filter__brandGp");
let filter__brand = document.querySelector(".filter__brand");

filter__brand.addEventListener("click", function () {
  filter__brandGp.classList.toggle("activeF");
});

changeC.addEventListener("click", () => {
  changeC.classList.toggle("changeJs");
});

changeCS.addEventListener("click", () => {
  changeCS.classList.toggle("changeJsS");
});

let viewList = document.querySelector(".view-list");
let viewGrid = document.querySelector(".view-grid");
let viewChange = document.querySelector(".viewChange");
let viewChangeImg = document.querySelector(".viewChangeImg");

let imgsrc = function (imgList, transform) {
  let img = imgList;
  viewChangeImg.setAttribute('src', img);
  viewChange.style = transform;
};

viewList.addEventListener("click", () => {
  imgsrc('./assets/img/viewlistorange.svg', "transform: translate(0px)");
});

viewGrid.addEventListener("click", () => {
  imgsrc('./assets/img/view-gridOrange.svg', "transform: translate(50px)");
});

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
  $(this).parents(".group").find("input").attr("value", $(this).attr("id"));
});



let content__blockText = document.querySelector(".content__blockText");
let content__blockTextspan = document.querySelector(".content__blockText span");

let content__block = document.querySelector(".contentTeg");

let checkboxes = document.querySelectorAll(".tag");

let listArray = [];

for (let checkbox of checkboxes) {
  checkbox.addEventListener("click", function () {
    if (this.checked) {
      let div = document.createElement("div");
      div.innerHTML = this.value;
      div.classList.add("content__blockText");
      listArray.push(div);
      for (i = 0; i < listArray.length; i++) {
        content__block.append(listArray[i]);
      }
    } else {
      let elem = listArray.find((item) => item.innerText === this.value);
      let index = listArray.indexOf(elem);
      content__block.removeChild(listArray[index]);
      listArray.splice(index, 1);
    }
  });
}

for (let e of checkboxes) {
  e.onchange = changeTag;

  let div = document.createElement("div");
  let span = document.createElement("span");

  div.innerText = e.value;
  div.classList.add("ltag");
  span.classList.add("lspan");
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

