/*
		Your Name: Kevin Hackler
		Last Modified Date: 12/06/2023
		File: event_registration.js
		File Description: <Enter a brief paragraph to describe the purpose of this file>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/

// Initialize the timer
var timeRemaining = 10 * 60; // Time remaining represented in seconds
var display = document.getElementById('timer'); // targeting the timer and storing it as a variable that I can update

// Setting up an interval
var interval = setInterval(function () {
	// Calculates minutes and seconds from timeRemaining
	var minutes = Math.floor(timeRemaining / 60);
	var seconds = timeRemaining % 60;

	// Formatting the time string
	seconds = seconds < 10 ? "0" + seconds : seconds;

	// Update the timer display
	display.textContent = minutes + ":" + seconds;

	// Decrease the timer
	timeRemaining--;

	// Check if timer has expired 
	if (timeRemaining < 0) {
		clearInterval(interval);
		alert("Time expired!");
		window.location.href = window.location.href; // Redirects to same webpage
	}
}, 1000);

// Setting up our function to calculate the total cost of our tickets
function calculateTotal() {
	// Targeting the user input value for the number of tickets selected and storing it into a new variable
	let numTickets = document.getElementById('numTickets').value;

	/* Conditional statements to check if the user input is a number type and using the comparison operators <= and >= to see if they are within our parameters set by the variables "minTickets" and "maxTickets" */
	if (!isNaN(numTickets) && numTickets >= minTickets && numTickets <= maxTickets) {
		let totalCost = (numTickets * costPerTicket) + (numTickets * ticketSurcharge);

		// Update the total cost field with the calculated cost.
		document.getElementById('totalCost').value = '$' + totalCost;

		// Display the form fields for name and email by targeting the contactInformation div id
		document.getElementById('contactInformation').style.display = 'block';

		// No error indicator
		setError('numTickets', false);
	} else {
		// If an error exists, display the error to the user and hide the contact information section
		setError('numTickets', true);
		document.getElementById('contactInformation').style.display = 'none';
	}
}

//
function completePurchase() {
	// Declare variables with the retrieved values entered by the user in the name and email fields
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let isValid = true;

	// Check if the name field is empty
	if (name === '') {
		// Show an error and update isValid
		setError('name', true);
		isValid = false;
	} else {
		setError('name', false);
	}

	// Do the same for the email field
	if (email === '') {
		// Show an error and update isValid
		setError('email', true);
		isValid = false;
	} else {
		setError('email', false);
	}

	// If all fields are valid, display an alert and stop the timer
	if (isValid) {
		alert('Thank you for your purchase! Total amount: ' + document.getElementById('totalCost').value);
		clearInterval(interval);
	}
}

function setError(elementId, isError) {
	// Retrieve the input element by getting its ID
	var element = document.getElementById(elementId);

	// Constructor for error messages 
	var messageElementId = 'msg' + elementId;
	var messageElement = document.getElementById(messageElementId);


	if (element && messageElement) {
		if (isError) {
			// Display changes for an existing error 
			element.style.backgroundColor = 'red';
			messageElement.textContent = 'Please enter a valid value.';
		} else {
			// If no error exists, set display to its defaults
			element.style.backgroundColor = 'white';
			messageElement.textContent = '';
		}
	}
}


