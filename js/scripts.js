$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var gender = $("#gender").val();
    var hair = $("#hair").val();

    console.log(gender);
    console.log(hair);


    if ((gender === "Male") && (hair === "Green")) {
      $(".result1").show();
    } else if ((gender === "Male") && (hair === "Pink")) {
      $(".result2").show();
    } else if ((gender === "Female") && (hair === "Green")) {
      $(".result3").show();
    } else {
      $(".result4").show();
    }
  });
});
