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
  if (firstInput.value.trim().length < 2 ) {
    firstError.innerHTML = 'Le prénom doit comporter au moins 2 caractères.';
  } else {
    firstError.innerHTML = ''
  }
});

// name verif
const lastInput = document.getElementById('last-input');
const lastError = document.getElementById('last-error');

lastInput.addEventListener('blur', function() {
  if (lastInput.value.trim().length < 2) {
    lastError.innerHTML = 'Le nom doit comporter au moins 2 caractères.';
  } else {
    lastError.innerHTML = '';
  }
});

// email verif
const emailInput = document.getElementById('email-input');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('blur', function() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.innerHTML = 'Veuillez entrer une adresse email valide.';
  } else {
    emailError.innerHTML = '';
  }
});

// date verif
const dateInput = document.getElementById('birthdate-input');
const dateError = document.getElementById('birthdate-error');

dateInput.addEventListener('blur', function() {
  if (dateInput.value === '' ){
    dateError.innerHTML = 'Veuillez entrer votre date de naissance.';
  } else {
    dateError.innerHTML = '';
  }
});

// number verif
const numberInput = document.getElementById('quantity');
const numberError = document.getElementById('number-error');

numberInput.addEventListener('blur', function() {
  const value = numberInput.value;
  if (value === '' || isNaN(value) || !Number.isInteger(Number(value))) {
    numberError.innerHTML = 'Veuillez entrer un nombre entier.';
  } else {
    numberError.innerHTML = '';
  }
});

// location verif
const locationInputs = document.getElementsByName('location');
const locationError = document.getElementById('location-error');

function isLocationSelected() {
  for (let i = 0; i < locationInputs.length; i++) {
    if (locationInputs[i].checked) {
      return true;
    }
  }
  return false;
};

function validateLocation() {
  if (!isLocationSelected()) {
    locationError.innerHTML = 'Veuillez sélectionner une ville.';
    return false;
  } else {
    locationError.innerHTML = '';
    return true;
  }
};

reserve.addEventListener('submit', function(e) {
  if (!validateLocation()) {
    e.preventDefault();
  }
});

// condition verif
const conditionInput = document.getElementById('checkbox1');
const conditionError = document.getElementById('condition-error');

function isConditionAccepted() {
  if (!conditionInput.checked) {
    return false;
  } else {
    return true;
  }
};

conditionInput.addEventListener('change', function() {
  if (!conditionInput.checked) {
    conditionError.innerHTML = 'Vous devez accepter les conditions générales.';
    return false;
  } else {
    conditionError.innerHTML = '';
    return true;
  }
});

const modalbody = document.getElementById('modalbody');
reserve.addEventListener('submit', function(e) {
  if (!isConditionAccepted()) {
    e.preventDefault();
  } else {
      reserve.submit();
      modalbody.innerHTML = 'Merci pour votre inscription';
      modalbody.classList.add('merci');
  };
});

const closeLastModal = document.getElementById('closelastmodal');
closeLastModal.addEventListener('click', closeModal);
