document.addEventListener("DOMContentLoaded", function () {
  const matches = document.querySelectorAll('.match-row > div');
  const btnLeft = document.querySelector('.arrow-left');
  const btnRight = document.querySelector('.arrow-right');
  const VISIBLE = 7; 
  let start = 0;

  function updateView() {
    matches.forEach((match, idx) => {
      match.classList.toggle('active', idx >= start && idx < start + VISIBLE);
    });
  }

  btnRight.addEventListener('click', function () {
    if (start + VISIBLE < matches.length) {
      start++;
      updateView();
    }
  });

  btnLeft.addEventListener('click', function () {
    if (start > 0) {
      start--;
      updateView();
    }
  });

  updateView();
});