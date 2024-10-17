var submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
  console.log("clicked");
  console.log(e);

  var errors = 0;

  var lettersSpaces = new RegExp("^[A-Za-zs]*$");

  var name = document.getElementById("name");
  var nameError = document.getElementById("name-error");
  if (!name.value) {
    nameError.innerHTML = "Please provide your name";
    errors++;
  } else if (!lettersSpaces.test(name.value)) {
    nameError.innerHTML = "Please provide a valid name";
    errors++;
  } else {
    nameError.innerHTML = "";
  }

  if (errors == 0) {
    var message = document.getElementById("message");
    message.innerHTML = "Thank you!";
    name.value = "";
  }

  e.preventDefault();
});
