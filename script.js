// Elements
const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

// Global Variables
let countdownTitle = '';
let countdownDate = '';

// Set date input minimum with todays date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Take Values from form input
function updateCountdown(event) {
  event.preventDefault();
  countdownTitle = event.srcElement[0].value;
  countdownDate = event.srcElement[1].value;
  console.log('Title: ', countdownTitle, 'Date ', countdownDate);
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);
