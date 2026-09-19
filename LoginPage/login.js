const loginForm = document.getElementById("forminfo");


loginForm.addEventListener("submit", function (event) {

  event.preventDefault();


  
  const emailorphone =
    document.getElementById("emailorphone").value.trim();

  const password =
    document.getElementById("password").value.trim();


  
  if (
    emailorphone === "admin@gmail.com" &&
    password === "123456"
  ) {

    alert("Login successful!!");

    window.location.href = "../index.html";

  } else {

    alert("Incorrect password or email!");

  }

});