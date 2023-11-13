document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('my-form');
    form.addEventListener('submit', validateForm);
})

function validateForm(event) {
    event.preventDefault();
    // Declaring all variables related to first name 
    var firstName = document.getElementById('firstName');
    var firstNameError = document.getElementById('firstNameError');
    let fNameRegex = /^[a-zA-Z]+$/;

    // Repeat for last name input
    var lastName = document.getElementById('lastName');
    var lastNameError = document.getElementById('lastNameError');
    let lNameRegex = /^[a-zA-Z]+$/;

    // Repeat for address fields
    var shippingAddress = document.getElementById('shippingAddress');
    var addressError = document.getElementById('addressError');
    let addressRegex = /^[\w\s]+$/;

    // Repeat for city field
    var cityName = document.getElementById('cityName');
    var cityError = document.getElementById('cityError');
    let cityRegex = /^[a-zA-Z]+$/;

    // State variables
    var stateName = document.getElementById('stateName');
    var stateError = document.getElementById('stateError');

    // Zipcode Variables
    var zipCode = document.getElementById('zipCode');
    var zipError = document.getElementById('zipError');
    let zipRegex = /^\d{5}$/;

    //Email variables
    var emailAddress = document.getElementById('emailAddress');
    var emailError = document.getElementById('emailError');
    var emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    // First check to see if the field is empty
    if (firstName.value.trim() === '') {
        firstNameError.textContent = 'First name is required. ';
    }
    // Second check to see if the field is in the correct format
    else if (!fNameRegex.test(firstName.value.trim())) {
        firstNameError.textContent = 'First name should contain only letters. ';
    }
    // Hides the error message if name field passes the checks 
    else {
        firstNameError.textContent = '';
    }

    // Repeat the same conditionals for my last name
    if (lastName.value.trim() === '') {
        lastNameError.textContent = 'Last name is required. ';
    } else if (!lNameRegex.test(lastName.value.trim())) {
        lastNameError.textContent = 'Last name should contain only letters.';
    } else {
        lastNameError.textContent = '';
    }

    // Conditionals for address form 
    if (shippingAddress.value.trim() === '') {
        addressError.textContent = 'Address is required. ';
    } else if (!addressRegex.test(shippingAddress.value.trim())) {
        addressError.textContent = 'Address should contain no special characters. ';
    } else {
        addressError.textContent = '';
    }

    // Conditionals for City Name
    if (cityName.value.trim() === '') {
        cityError.textContent = 'City is required. ';
    } else if (!cityRegex.test(cityName.value.trim())) {
        cityError.textContent = 'City must contain only letters. ';
    } else {
        cityError.textContent = '';
    }

    // Conditionals for State - No regex needed - simply check if a value has been selected or not
    if (stateName.value === '') {
        stateError.textContent = 'State selection is required. ';
    } else {
        stateError.textContent = '';
    }

    // Conditionals for Zipcode
    if (zipCode.value === '') {
        zipError.textContent = 'Zipcode is required. ';
    } else if (!zipRegex.test(zipCode.value.trim())) {
        zipError.textContent = 'Zipcode must be 5 digits only. ';
    } else {
        zipError.textContent = '';
    }
}