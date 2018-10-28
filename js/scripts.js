function robotNumber(number) {
  console.log(number)

  var newArray = number.toString();
  console.log(newArray)

  var splitNumber = newArray.split("");
  console.log(splitNumber)

  var resultArray = [];

  for (var i = 0; i < splitNumber.length; i ++) {
    console.log("this is in the forloop: " + splitNumber)
    if (splitNumber.includes("1")) {
      resultArray.push("boop");
      console.log(resultArray)
    }
    else if (number.includes("0")) {
      resultArray.push("boop");
    }
    else {
      return num;
    }
    return resultArray
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
