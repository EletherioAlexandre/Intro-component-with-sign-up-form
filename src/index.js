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

    if (validStatus) {
      form.submit();
    }

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
    let email = document.getElementById("input-email").value;
    let msg_error = document.querySelectorAll("label");

    for (let index = 0; index < input.length; index++) {

      input[index].style.borderColor = "green";
      msg_error[index].innerHTML = `<small class="validated"></small>`;
      input[index].classList.remove("errorMessage");

      if (input[index].value == "") {
        input[index].style.borderColor = "red";
        input[index].classList.add("errorMessage")
        msg_error[index].innerHTML = `<small class="error">${input[index].placeholder} cannot be empty</small>`;

        status = false;
        
      } else if (input[index].placeholder == "Email Address" && !isEmailValid(email)) {
        input[index].style.borderColor = "red";
        input[index].classList.add("errorMessage")
        msg_error[index].innerHTML = `<small class="error">Looks like this is not an email</small>`;

        status = false;
      }
    }

  return status;
}

   

  