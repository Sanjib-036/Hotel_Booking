const signUpbtn = document.getElementById('register');
const signInbtn = document.getElementById('login');
const container = document.getElementById('container');

signUpbtn.addEventListener('click', () =>
  container.classList.add('right-panel-active')
);

signInbtn.addEventListener('click', () =>
  container.classList.remove('right-panel-active')
);

// $("#createAccount").click(function () {
//   let user = {
//     name: $("#upName").val(),
//     email: $("#upEmail").val(),
//     password: $("#upPassword").val(),
//     csrfToken: $("#_crsf").val(),
//   };
//   $.ajax({
//     method: "POST",
//     url: "/register",
//     data: user,
//     successCallBack: (response) => {
//       window.redirect("/");
//     },
//     failureCallBack: (response) => {
//       window.redirect("/register");
//     },
//   });
// });
