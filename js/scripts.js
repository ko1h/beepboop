function robotNumber(number) {
  console.log(number)

  var newArray = number.toString();
  console.log(newArray)

  var splitNumber = newArray.split("");
  console.log(splitNumber)

  if (number = " ") {
    var noNumber = "Please enter a number"
    return noNumber;
  } 
  else if (number <== 3000) {
    for (var i = 0; i < number; i ++) {
    console.log("this is in the forloop: " + splitNumber)
    if (number % 3)

    return number
  }
}

$(document).ready(function() {
  $("form#convertor").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#inputNumber").val());
    var result = robotNumber(number);
    $("#result").show();
    $("#result").text(result);
    console.log(result)
  });
});
