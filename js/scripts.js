$(document).ready(function() {
  $("form#convertor").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#inputNumber").val());
    var result = counter(number);

    $("#result").show();
    $("#result").text(result);
    console.log(result)
  });
});
