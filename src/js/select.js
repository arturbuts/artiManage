let select = function () {
  // Use consistent selectors for better maintainability
  let selectHeader = document.querySelectorAll('.lang__main, .selector__main'); // Combine selectors
  let selectItem = document.querySelectorAll('.lang__item, .selector__item'); // Combine selectors

  // Event listener for hiding selection on outside click
  document.body.addEventListener('click', function(event) {
    let clickedElement = event.target;
    let closestSelector = clickedElement.closest('.lang, .form__selector'); // Handle both classes

    // Check if clicked element or its ancestors don't have the selector class
    if (!closestSelector) {
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
    let select = this.closest('.lang, .form__selector'); // Handle both classes
    let currentText = select.querySelector('.lang__current, .selector__current'); // Handle both classes
    currentText.innerText = text;
    select.classList.remove('is-active');


    // Update corresponding input field in the form
    let input = select.querySelector('input[type="hidden"]');
    if (input) {
      input.value = text; // Обновляем значение скрытого поля в форме
    }
  }
};

select();
