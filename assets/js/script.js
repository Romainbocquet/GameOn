import Formulaire from "./formulaire.js";
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const cloteBtn = document.querySelectorAll(".close");
const topNav = document.getElementById("myTopnav");
const submitForm = document.querySelector(".btn-submit");
const inputAccepte = document.querySelector('#checkbox1');
const localisation1 = document.querySelector('#location1');
const localisation2 = document.querySelector('#location2');
const localisation3 = document.querySelector('#location3');
const localisation4 = document.querySelector('#location4');
const localisation5 = document.querySelector('#location5');
const localisation6 = document.querySelector('#location6');

  //appel de la class Formulaire pour créer l'objet Formulaire
const formulaire = new Formulaire(inputAccepte,
  localisation1, localisation2, localisation3, localisation4, localisation5, localisation6);

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  formulaire.init();
});

function editNav() {
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

cloteBtn.forEach((cloteBtn) => cloteBtn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  document.querySelector('.hero-section').classList.add("mobileHide");
  document.querySelector('footer').classList.add("mobileHide");
}

//close modal form
function closeModal() {
  modalbg.style.display = "none";
  document.querySelector('.hero-section').classList.remove("mobileHide");
  document.querySelector('footer').classList.remove("mobileHide");
}

const burger = document.querySelector('#openNav');
burger.addEventListener("click", editNav);  