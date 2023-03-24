var numberBtn1El = $('#generate-btn1');
var numberDisplay1El = $("#number-display1");
var numberBtn2El = $('#generate-btn2');
var numberDisplay2El = $("#number-display2");

function getNumber1() {
    return Math.floor(Math.random() * 4) + 1;
}

numberBtn1El.on('click', function () {
    var newNumber1 = getNumber1();
    numberDisplay1El.text(newNumber1);
  });



  function getNumber2() {
    return Math.floor(Math.random() * 4) + 1;
}

numberBtn2El.on('click', function () {
    var newNumber2 = getNumber2();
    numberDisplay2El.text(newNumber2);
  });



  // ideas for improvement:
 // add players, erik on left me on right, add words instead of numbers