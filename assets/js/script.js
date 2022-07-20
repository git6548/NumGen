var numberBtnEl = $('#generate-btn');
var numberDisplayEl = $("#number-display");

function getNumber() {
    return Math.floor(Math.random() * 4) + 1;
}

numberBtnEl.on('click', function () {
    var newNumber = getNumber();
    numberDisplayEl.text(newNumber);
  });


  // ideas for improvement:
 // add players, erik on left me on right, add words instead of numbers