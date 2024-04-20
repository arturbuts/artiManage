window.addEventListener('DOMContentLoaded', function () {

  let video = document.querySelector('.video');

  let startVideoButton = document.querySelector('.start-video');


  video.addEventListener('click', function () {
    playVideo();
  });

  startVideoButton.addEventListener('click', function () {
    playVideo();
  });

  function playVideo() {
    if (video.classList.contains('ready')) {
      return; // Prevent multiple clicks
    }

    video.classList.add('ready');
    startVideoButton.style.display = 'none'; // Hide the button

    let src = video.dataset.src;

    video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
  }
});
