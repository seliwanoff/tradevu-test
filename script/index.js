const dropdownButton = document.getElementById("dropdownButton");
const dropdown = document.getElementById("dropdown");

dropdownButton.addEventListener("click", () => {
  if (dropdown.classList.contains("actives")) {
    dropdown.classList.remove("actives");
  } else {
    dropdown.classList.add("actives");
  }
});

const dropdownButtons = document.getElementById("dropdownButtons");
const dropdowns = document.getElementById("dropdowns");

dropdownButtons.addEventListener("click", () => {
  if (dropdowns.classList.contains("actives")) {
    dropdowns.classList.remove("actives");
  } else {
    dropdowns.classList.add("actives");
  }
});
const dropdownButtonss = document.getElementById("dropdownButtonssp");
const dropdownss = document.getElementById("dropdownssp");
///console.log(dropdownss);

dropdownButtonss.addEventListener("click", () => {
  if (dropdownss.classList.contains("actives")) {
    dropdownss.classList.remove("actives");
  } else {
    dropdownss.classList.add("actives");
  }
});
const dropdownButtonsss = document.getElementById("dropdownButtonsss");
const dropdownsss = document.getElementById("dropdownsss");

dropdownButtonsss.addEventListener("click", () => {
  if (dropdownsss.classList.contains("actives")) {
    dropdownsss.classList.remove("actives");
  } else {
    dropdownsss.classList.add("actives");
  }
});

const dropdownButtonssss = document.getElementById("dropdownButtonssss");
const dropdownssss = document.getElementById("dropdownssss");

dropdownButtonssss.addEventListener("click", () => {
  if (dropdownssss.classList.contains("actives")) {
    dropdownssss.classList.remove("actives");
  } else {
    dropdownssss.classList.add("actives");
  }
});

const menuButton = document.getElementById("menuButton");
const modal = document.getElementById("modal");
const closeIcon = document.getElementById("closeIcon");

menuButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
