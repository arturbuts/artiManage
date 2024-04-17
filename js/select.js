let select = function () {
  let selectHeader = document.querySelectorAll('.lang__main');
  let selectItem = document.querySelectorAll('.lang__item')


  selectHeader.forEach(item=> {
    item.addEventListener('click', selectToggle)
  })

  selectItem.forEach(item=> {
    item.addEventListener('click', selectChoose)
  })

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText;
        select = this.closest('.lang'),
        currentText = select.querySelector('.lang__current');
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
};



select();
