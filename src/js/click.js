// Получаем кнопку "See technical requirements"
let button = document.querySelector(".rqmts__btn");

// Добавляем обработчик события клика на кнопку
button.addEventListener("click", function() {
    // Добавляем класс "is-clicked" при клике
    this.classList.toggle("is-clicked");

    // Получаем блок с классом "rqmts__content"
    let content = document.querySelector(".rqmts__content");

    // Переключаем отображение блока с классом "rqmts__content"
    content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
});
