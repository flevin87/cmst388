function validateNameFields() {
    // Trim off trailing whitespace for best practice
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    //storing a variable for the regular expression which checks for alpha characters only
    var nameRegex = /^[A-Za-z]+$/;
    var errorMessage = '';

    // Check if the first name is empty or contains non-alphabetic characters
    if (firstName === '') {
        errorMessage += 'First name is required. ';
    } else if (!nameRegex.test(firstName)) {
        errorMessage += 'First name should contain only letters. ';
    }

    // Checks the same for last name
    if (lastName === '') {
        errorMessage += 'Last name is required. ';
    } else if (!nameRegex.test(lastName)) {
        errorMessage += 'Last name should contain only letters. ';
    }

    if (errorMessage) {
        alert(errorMessage);
        return false;
    }

    return true;
}

document.querySelector('form').addEventListener('submit', function (event) {
    if (!validateNameFields()) {
        event.preventDefault();
    }
});