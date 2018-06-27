document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOM fully loaded and parsed');

  // 1. declare variables
  var wins = 0;
  var losses = 0;
  var tries = 9;
  var triesLeft = 9;
  var guesses = [];

  // 2. set CSS styles
  document.getElementById('hangman').style.alignItems = 'space-between';
  document.getElementById('country').style.padding = 0;
  document.getElementById('country').style.display = 'flex';
  document.getElementById('country').style.alignItems = 'space-between';
  document.getElementById('country').style.justifyContent = 'center';

  // 3. list of countries the user can guess
  countries = ['Argentina', 'Brazil', 'Morocco', 'Mexico'].map(x =>
    x.toUpperCase()
  );
});
