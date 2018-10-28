function robotNumber(inputNum) {
    console.log("this is working")

    var newArray = inputNum.toString();
    console.log(newArray)

    if (inputNum === 3) {
      return "I'm sorry, Dave. I'm afraid I can't do that.";
    }
    else if (newArray.includes("0")) {
      return "beep";
    }
    else if (newArray.includes("1")) {
      return "boop";
    }
    return inputNum
    console.log(newArray)
}

// function rebotSounds(inputNum) {
//   console.log("second function")
//
//   var arrayResult = [];
//
//     for (var i = 0; i < splitArray.length; i++) {
//   }
// }


$(document).ready(function() {
  $("form#convertor").submit(function(event) {
    event.preventDefault();
    var inputNum = parseInt($("input#inputNumber").val());
    var result = robotNumber(inputNum);
    $("#result").show();
    $("#result").text(result);
    console.log(result)
  });
});
