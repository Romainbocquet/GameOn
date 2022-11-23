

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const cloteBtn = document.querySelectorAll(".close");
const topNav = document.getElementById("myTopnav");
const submitForm = document.querySelector(".btn-submit");
const prenom1 = document.querySelector("#prenom");
const nom1 = document.querySelector("#nom");
const email1 = document.querySelector("#email");

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  //creation d'une classe contenant les values des champs de formulaire
  class Formulaire {
    constructor() {
      this.prenom = prenom1.value;
      this.nom = nom1.value;
      this.email = email1.value;
    }
  }

  //appel de la class Formulaire pour créer l'objet formulaireValues
  const formulaireValues = new Formulaire();

  //validation des champs des formulaires
  //regex
  const regExNomPrenom = (value) => {
    return /^[A-Za-z]{2,20}$/.test(value);
  }
  const regExMail = (value) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  }

  //Controle Nom et Prénom
  function ControlePrenom() {
    const prenom = formulaireValues.prenom;
    if (regExNomPrenom(prenom)) {
      prenom1.parentNode.setAttribute("data-error-visible", "false");
      return true;
    }
    else {
      prenom1.parentNode.setAttribute("data-error-visible", "true");
      return false;
    };
  };

  function ControleNom() {
    const nom = formulaireValues.nom;
    if (regExNomPrenom(nom)) {
      nom1.parentNode.setAttribute("data-error-visible", "false");
      return true;
    }
    else {
      console.log(nom1);
      nom1.parentNode.setAttribute("data-error-visible", "true");
      return false;
    };
  };


  //Controle Mail
  function ControleMail() {
    const mail = formulaireValues.email;
    if (regExMail(mail)) {
      email1.parentNode.setAttribute("data-error-visible", "false");
      return true;
    }
    else {
      email1.parentNode.setAttribute("data-error-visible", "true");
      return false;
    };
  };
  
  ControleNom();
  ControlePrenom();
  ControleMail();

  //mettre les valeurs des champs de formulaire dans le local storage
  if (ControleNom() && ControlePrenom() && ControleMail()) {
    localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues));
  }
  else {
    console.log("PAS BON PAS BON");
  }

});


//Mettre les valeurs du local storage dans les champs de formalaire
const dataLocalStorage = localStorage.getItem("formulaireValues");
const dataLocalStorageObject = JSON.parse(dataLocalStorage);

// fontction pour que le champ soit rempli avec le local storage si elle existe
if (dataLocalStorage !== null) {
  function remplirLesChampsAvecLeLocalStorage(input) {
    document.querySelector(`#${input}`).value = dataLocalStorageObject[input];
  }
  remplirLesChampsAvecLeLocalStorage("prenom");
  remplirLesChampsAvecLeLocalStorage("nom");
  remplirLesChampsAvecLeLocalStorage("email");
}



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
}

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}
