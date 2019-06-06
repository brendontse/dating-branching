$(document).ready(function() {
  $("form#dating-info").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = ($("select#gender").val());

    $('.response').hide()
    if (gender === 'male') {
      if (age >= 18 && age <= 32) {
        $('#matchm1').toggle()
      } else if (age > 32) {
        $('#matchm2').toggle()
      };
    };
    if (gender === 'female') {
      if (age >= 18 && age <= 32) {
        $('#matchf1').toggle()
      } else if (age > 32) {
        $('#matchf2').toggle()
      };
    };
    $("#age").show();
    event.preventDefault();
  });
});