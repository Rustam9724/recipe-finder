// Изменение количества элементов в блоке TOP-SECTION  в зависимости от ширины экрана
const recipeItems = document.querySelectorAll(".receipes__item");

recipeItems.forEach(item => {
    if (+item.dataset.minwidth > window.innerWidth) {
        item.style.display = "none"
    }
})