function robotNumber(number) {
  console.log("this is working")

  var array = [...Array(number).keys()];
  console.log(array)


  var newArray = number.split('');
  console.log(newArray)


  for(var i = 0; i < array.length; i++)
  {
    if (array === 0) {
      (".beep").append(" beep");
    } else if (array  === 1) {
      (".boop").append(" boop");
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
