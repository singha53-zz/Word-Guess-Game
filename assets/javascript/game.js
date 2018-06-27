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

  // 4. function to randomly select a country
  function chooseCountry() {
    return countries[Math.round(Math.random() * (countries.length - 1))];
  }

  // 5. function to display lines for placeholders for letters of different countries
  function displayCountryLines(country) {
    // remove previous children dispatchEventvar
    myNode = document.getElementById('country');
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
    for (let i = 0; i < country.length; i++) {
      var newDiv = document.createElement('div');
      size = myNode.offsetWidth / country.length;

      // add CSS to new div
      newDiv.style.width = size + 'px';
      newDiv.style.height = size + 'px';
      newDiv.style.borderBottom = 'thick solid black';
      newDiv.style.marginRight = '10px';
      newDiv.style.textAlign = 'center';

      // add id to each div
      newDiv.classList.add(country[i]);

      myNode.appendChild(newDiv);
    }
  }

  // 6. function to identify unique letters in strings
  function unique_char(str1) {
    var str = str1;
    var uniql = '';
    for (var x = 0; x < str.length; x++) {
      if (uniql.indexOf(str.charAt(x)) == -1) {
        uniql += str[x];
      }
    }
    return uniql;
  }


});
