function robotNumber(number, before, after) {
  console.log("this is working")

  var newArray = number.toString();
  console.log(newArray)

  var splitNumber = newArray.split("");
  console.log(splitNumber)

  if (splitNumber === 3 ) {
    return ("boop")
  }
  console.log(return)
  // else if { (splitNumber === "0") {
  //   return "BEEP"
  // }
  // else if { (splitNumber === "1") {
  //   return "Boop"
  // } else {
  //   return num;

  for (var i = 0; 1 < splitNumber.length; i++){
    if (splitNumber[i] === before) {
      splitNumber[i] = after;
    }
  return splitNumber;
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
