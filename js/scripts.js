function robotNumber(number) {
  var newSomthing = [];
  for (var i = 0; i < something; i++) {
    newSomething.push(i);
  }
  return number;
}

  // console.log("this is working")
  //
  // var array = [...Array(number + 1).keys()];
  // console.log(array)
  //
  // var newArray = array.toString();
  // console.log(newArray)
  //
  // var splitArray = newArray.split("")
  // console.log(splitArray)



  // var numberOfInputs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  // var robotSound = ["beep", "boop", "2", "I'm sorry, Dave. I'm afraid I can't do that", "4", "5", "6", "7", "8", "9"]
  //
  // number = [];
  //
  // console.log (robotSound);
  // for (var i = 0; i < splitArray.length; i++) {
  //     if (parseInt(robotSound[0]) === i) {
  //       var Result4 = robotSound[i];
  //     console.log (Result4)
  //     }
  //   }

  // numberOfInputs.forEach(function(numberOfInputs) {
  //   robotSound.forEach(function(robotSound){
  //     console.log(robotSound)
  //   });
  // });
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
