function robotSounds(inputNum) {
  console.log("this is working")

  var newArray = inputNum.toString();
  console.log(newArray)

  var splitArray = newArray.split("")
  console.log(splitArray)

    var arrayResult = [];

    for (var i = 0; i < splitArray.length; i++) {
      console.log(splitArray)
      if (splitArray.includes("3")) {
        arrayResult.push("I'm sorry, Dave. I'm afraid I can't do that.");
      }
      else if (splitArray.includes("0")) {
        arrayResult.push("beep");
      }
      else if (splitArray.includes("1")) {
        arrayResult.push("boop");
      }
      return arrayResult
  }
}


$(document).ready(function() {
  $("form#convertor").submit(function(event) {
    event.preventDefault();
    var inputNum = $("input#inputNumber").val();
    var result = robotSounds(inputNum);

    $("#result").show();
    $("#result").text(result);
    console.log(result)
  });
});
