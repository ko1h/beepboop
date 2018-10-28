
function robotNumber(number) {
  console.log("this is working")



  // var array = [...Array(number + 1).keys()];
  // console.log(array)

  // var newArray = number.toString();
  // console.log(newArray)
  //
  // // return newArray
  // var splitArray = newArray.split(",");
  // console.log(splitArray)
// }
//
// function robotSound(number) {
//   console.log("new function area")

  var boop = ["boop"];
  var beep = ["beep"];

  var resultArray = [];

  for (var i = 0; i < number; i ++) {
    // if (splitArray.includes("1")) {
    //   resultArray.push(boop[i]);
    // }
    // else if (splitArray.includes("0")) {
    //   resultArray.push(beep[i]);
    array.push(number(i));
    var arrayString = array.string((" "));
    }
    console.log(resultArray)
  return arrayString
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
