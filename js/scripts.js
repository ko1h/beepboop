function robotNumber(number) {
  console.log("this is working")

  var array = [...Array(number + 1).keys()];
  console.log(array)

  var newArray = array.toString();
  console.log(newArray)

  if (number <= 0 && number >= 10) {
    var splitArray = newArray.split("");
    console.log(splitArray)
    for (var i = 0; i < arrayFirstTen.length; i++) {
      if (parseInt(splitArray[]) === i) {
        var arrayResult4 = arrayFirstTen[i];
      }
  return arrayResult4;
}
var arrayFirstTen = ["beep", "boop", "2", "I'm sorry, Dave. I'm afraid I can't do that", "4", "5", "6", "7", "8", "9"];


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
