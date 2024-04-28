// Изменение количества элементов в блоке TOP-SECTION  в зависимости от ширины экрана
const recipeItems = document.querySelectorAll(".receipes__item");

recipeItems.forEach(item => {
    if (+item.dataset.minwidth > window.innerWidth) {
        item.style.display = "none"
    }
})

// Анимация при загрузке страницы
const title = document.querySelector(".header__title");
const headerContainer = document.querySelector(".header__container")

title.style.fontSize = window.innerWidth < 605 ? "2.6rem" : "4rem";
title.style.top = window.innerWidth < 605 ? "16px" : "33px";
title.style.transform = "translate(-50%, 0)";