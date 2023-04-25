function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector('.close');
const form = document.querySelector('reserve');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  reserve.style.display = 'block';
}

// close modal form
function closeModal() {
  modalbg.style.display = 'none';

}

modalClose.addEventListener('click', closeModal);

// firstname verif
const firstInput = document.getElementById('first-input');
const firstError = document.getElementById('first-error');

firstInput.addEventListener('blur', function() {
  if (firstInput.value.length < 2) {
    firstError.innerHTML = 'Le prénom doit comporter au moins 2 caractères.';
    return false;
  } else {
    firstError.innerHTML = ''
    return true;
  }
});

// name verif
const lastInput = document.getElementById('last-input');
const lastError = document.getElementById('last-error');

lastInput.addEventListener('blur', function() {
  if (lastInput.value.length < 2) {
    lastError.innerHTML = 'Le nom doit comporter au moins 2 caractères.';
    return false;
  } else {
    lastError.innerHTML = '';
    return true;
  }
});

// email verif
const emailInput = document.getElementById('email-input');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('blur', function() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.innerHTML = 'Veuillez entrer une adresse email valide.';
    return false;
  } else {
    emailError.innerHTML = '';
    return true;
  }
});

// date verif
const dateInput = document.getElementById('birthdate-input');
const dateError = document.getElementById('birthdate-error');

dateInput.addEventListener('blur', function() {
  if (dateInput.value === '' ){
    dateError.innerHTML = 'Veuillez entrer votre date de naissance.';
    return false;
  } else {
    dateError.innerHTML = '';
    return true;
  }
});

// number verif
const numberInput = document.getElementById('quantity');
const numberError = document.getElementById('number-error');

numberInput.addEventListener('blur', function() {
  const value = numberInput.value;
  if (value === '' || isNaN(value) || !Number.isInteger(Number(value))) {
    numberError.innerHTML = 'Veuillez entrer un nombre entier.';
    return false;
  } else {
    numberError.innerHTML = '';
    return true
  }
});

// location verif
const locationInputs = document.getElementsByName('location');
const locationError = document.getElementById('location-error');

function isLocationSelected() {
  for (let i = 0; i < locationInputs.length; i++) {
    if (locationInputs[i].checked) {
      return true;
    } else {
      return false;
    }
  }
}

function validateLocation() {
  if (!isLocationSelected()) {
    locationError.innerHTML = 'Veuillez sélectionner une ville.';
    return false;
  } else {
    locationError.innerHTML = '';
    return true;
  }
}

// condition verif
const conditionInput = document.getElementById('checkbox1');
const conditionError = document.getElementById('condition-error');

conditionInput.addEventListener('change', function() {
  if (!conditionInput.checked) {
    conditionError.innerHTML = 'Vous devez accepter les conditions générales.';
    return false;
  } else {
    conditionError.innerHTML = '';
    return true;
  }
});

//form valid
