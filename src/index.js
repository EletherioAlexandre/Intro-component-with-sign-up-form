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
    console.log("Chegou aqui");
  }
});
