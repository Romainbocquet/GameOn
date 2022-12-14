//creation d'une classe contenant les values des champs de formulaire
class Formulaire {
  constructor(inputAccepte, localisation1,
    localisation2, localisation3, localisation4, localisation5, localisation6) {
    this.inputPrenom = prenom;
    this.inputNom = nom;
    this.inputEmail = email;
    this.inputBirthdate = birthdate;
    this.inputAccepte = inputAccepte;
    this.inputLocalisation1 = localisation1;
    this.inputLocalisation2 = localisation2;
    this.inputLocalisation3 = localisation3;
    this.inputLocalisation4 = localisation4;
    this.inputLocalisation5 = localisation5;
    this.inputLocalisation6 = localisation6;
  }
  init() {
    //regex
    const regExNomPrenom = (value) => {
      return /^[A-Za-z]{2,20}$/.test(value);
    }
    const regExMail = (value) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }

    this.controleText(this.inputPrenom, regExNomPrenom);
    this.controleText(this.inputNom, regExNomPrenom);
    this.controleText(this.inputEmail, regExMail);
    this.birthdateControle(this.inputBirthdate);
    this.checkBoxRequired(this.inputAccepte);
    this.locationRequired();
    this.checkLocation();

    //mettre les valeurs des champs de formulaire dans le local storage
    if (this.controleText(this.inputNom, regExNomPrenom) &&
      this.controleText(this.inputPrenom, regExNomPrenom) &&
      this.controleText(this.inputEmail, regExMail) &&
      this.birthdateControle(this.inputBirthdate) &&
      this.checkBoxRequired(this.inputAccepte) &&
      this.locationRequired() &&
      this.locationRequired()) {
      document.querySelector('.insc-valide').style.display = "block";
      document.querySelector('.bground').style.display = "none";
      return true;
    }
    else {
      console.log("pb");
      return false;
    }
  }

  //validation des champs des formulaires
  controleText(input, regex) {
    if (regex(input.value)) {
      input.parentNode.setAttribute("data-error-visible", "false");
      return true;
    }
    else {
      input.parentNode.setAttribute("data-error-visible", "true");
      return false;
    }
  }

  checkLocation() {
    var checkboxes = document.querySelectorAll('input[name="location"]:checked');
    for (var checkbox of checkboxes) {
      console.log(checkbox.value);
    }
  }

  birthdateControle(input) {
    var x = new Date(input.value);
    var Cnow = new Date();
    if (Cnow.getFullYear() - x.getFullYear() < 16) {
      input.parentNode.setAttribute("data-error-visible", "true");
      return false;
    }
    else if (x == "Invalid Date") {
      input.parentNode.setAttribute("data-error-visible", "true");
      return false;
    }
    else {
      input.parentNode.setAttribute("data-error-visible", "false");
      return true;
    }
  }

  checkBoxRequired(input) {
    if (input.checked) {
      input.parentNode.setAttribute("data-error-visible", "false");
      return true;
    }
    else {
      input.parentNode.setAttribute("data-error-visible", "true");
      return false;
    }
  }

  locationRequired() {
    if (this.inputLocalisation1.checked ||
      this.inputLocalisation2.checked ||
      this.inputLocalisation3.checked ||
      this.inputLocalisation4.checked ||
      this.inputLocalisation5.checked ||
      this.inputLocalisation6.checked) {
      this.inputLocalisation3.parentNode.setAttribute("data-error-visible", "false");
      return true;
    }
    else {
      this.inputLocalisation3.parentNode.setAttribute("data-error-visible", "true");
      return false
    }
  }
}

export default Formulaire;