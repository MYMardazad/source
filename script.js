let $ = document;
const colorsBtn = $.querySelectorAll(".btn");

colorsBtn.forEach(function (colorBtn) {
  console.log(colorBtn);
  colorBtn.addEventListener("click", function (event) {
    // console.log(event.target.dataset.color);
    let btnColor = event.target.dataset.color;
    document.documentElement.style.setProperty('--theme-color',btnColor)
  });
});
