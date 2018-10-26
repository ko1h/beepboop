function robotNumber(number) {
  console.log("this is working")
  var arrayNumber = [...Array(number).keys()];
  console.log(arrayNumber)
  // var array = new Array();
  //   for(var i = start; i < end; i++)
  //   {
  //     array.push(i);
  //   }
  //   return array;
}



$(document).ready(function() {
  $("form#convertor").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#inputNumber").val());
    var result = robotNumber(number);

    $("#result").show();
    $("#result").text(result);
    console.log(number)
  });
});
