const MODAL = document.querySelector(".modal");
const TERMS = document.querySelector("#terms-services");
const DISMISS = document.querySelector(".dismiss");

document.addEventListener("click", function (e) {
  const event = e.target;

  if (event.classList.contains("terms-services")) {
    MODAL.classList.add("open");
  }

  if (event.classList.contains("dismiss")) {
    MODAL.classList.remove("open");
  }
});

const form = document.querySelector("#form")

form.addEventListener("submit", event => {

  event.preventDefault();
  const validStatus = validFields();

  // if (validStatus) {
  //   event.target.submit()
  // }

});

function isEmailValid(email) {
  const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  )

  return emailRegexp.test(email)
}

const validFields = () => {

  let status = true;

  let input = document.querySelectorAll("input");
  let first_name = document.getElementById("input-FirstName").value;
  let last_name = document.getElementById("input-LastName").value;
  let email = document.getElementById("input-email").value;
  let password = document.getElementById("input-password").value;
  let msg_error = document.querySelectorAll("label");

  if (!first_name == "") {
    input[0].style.borderColor = "green";
    msg_error[0].innerHTML = `<small style="display: none></small>`;
    status = false;
  }

  else {
    input[0].style.borderColor = "red";
    msg_error[0].innerHTML = `<small style="display: flex; justify-content: flex-end; color: red;">First Name cannot be empty</small>`;
  };

  if (!last_name == "") {
    input[1].style.borderColor = "green";
    msg_error[1].innerHTML = `<small style="display: none></small>`;
    status = false;
  }

  else {
    input[1].style.borderColor = "red";
    msg_error[1].innerHTML = `<small style="display: flex; justify-content: flex-end; color: red;">Last Name cannot be empty</small>`;
  };

  if (!isEmailValid(email) == "") {
    input[2].style.borderColor = "green";
    msg_error[2].innerHTML = `<small style="display: none></small>`;
    status = false;
  }
  else {
    input[2].style.borderColor = "red";
    msg_error[2].innerHTML = `<small style="display: flex; justify-content: flex-end; color: red;">Looks like this is not an email</small>`;
  }

  if (!password == "") {
    input[3].style.borderColor = "green";
    msg_error[3].innerHTML = `<small style="display: none></small>`;
    status = false;
  }

  else {
    input[3].style.borderColor = "red";
    msg_error[3].innerHTML = `<small style="display: flex; justify-content: flex-end; color: red;">Password cannot be empty</small>`;
  }

  return status;
}
