let select = function () {
  let selectHeader = document.querySelectorAll('.lang__main');
  let selectItem = document.querySelectorAll('.lang__item');

  // Event listener для скрытия выбора при клике вне области
  document.body.addEventListener('click', function(event) {
    let clickedElement = event.target;
    let closestLang = clickedElement.closest('.lang');

    // Проверка, не содержит ли clickedElement или его предки класс "lang"
    if (!closestLang) {
      selectHeader.forEach(item => item.parentElement.classList.remove('is-active'));
    }
  });

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest('.lang');
    let currentText = select.querySelector('.lang__current');
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
};

select();
