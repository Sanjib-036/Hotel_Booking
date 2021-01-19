const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const closeBtn = document.querySelector(".closebtn");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.remove("toggle");
  showcase.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  showcase.classList.remove("active");
  menuToggle.classList.add("toggle");
});

// $(".toggle").click(function () {
//   $(".toggle").classList.remove("toggle");
//   $(".showcase").classList.toggle("active");
// });

// $(".closebtn").click(function () {
//   $(".showcase").classList.remove("active");
//   $(".toggle").classList.add("toggle");
// });
