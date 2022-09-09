

let radio__input = document.querySelectorAll('.radio__input');
let header__vacancy = document.querySelector('.header__vacancy');
let vacancy__Group2 = document.querySelectorAll('.vacancy__Group2');

vacancy__Group2[0].classList.add('vacancy__active');

let vacancyFunction = function(Name, Vacancy, e) {
  if (e.labels[0].innerText === Name) {
    let i;
    for (i = 0; i < vacancy__Group2.length; i++) {
      vacancy__Group2[i].classList.remove('vacancy__active');
      if (vacancy__Group2[i].id === Vacancy) {
        let vacancy__Group = vacancy__Group2[i];
        vacancy__Group.classList.add('vacancy__active');
      } else {
      }
    }
  }
}

radio__input.forEach(function (e) {
  e.onclick = function () {
    vacancyFunction('Менеджер по продажам корпоративным клиентам', 'vacancy1', e);
    vacancyFunction('Аналитик', 'vacancy2', e);
    vacancyFunction('Финансовый менджер', 'vacancy3', e);
    vacancyFunction('Экономист', 'vacancy4', e);
    vacancyFunction('Начальник склада', 'vacancy5', e);
    vacancyFunction('Водитель', 'vacancy6', e);
    vacancyFunction('Грузчик', 'vacancy7', e);
    vacancyFunction('Администратор', 'vacancy8', e);
  }
})