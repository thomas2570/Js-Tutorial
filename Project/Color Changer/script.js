const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    const color = button.id;
    if (color) {
      body.style.backgroundColor = color;
    }
  });
});
