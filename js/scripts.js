function robotNumber(number) {
  console.log("this is working")

  var array = [...Array(number).keys()];
  console.log(array)


  for(var i = 0; i = array.length; i++) {
    var splitArray = array.slice('');
    console.log("this is split" + splitArray)
    if (array === 0) {
      (".beep").text(" beep");
    } else if (array  === 1) {
      (".boop").text(" boop");
    }
    console.log("after the array")
  }
  return array;
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
