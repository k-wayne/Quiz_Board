$(document).ready(function() {
  $("#starter").submit(function(event){
    var num1 = parseInt($("input:radio[name=num1]:checked").val());
    var num2 = parseInt($("input:radio[name=num2]:checked").val());
    var num3 = parseInt($("input:radio[name=num3]:checked").val());
    var num4 = parseInt($("input:radio[name=num4]:checked").val());
    var num5 = parseInt($("input:radio[name=num5]:checked").val());

    function add(num1,num2,num3,num4,num5){
      return num1 + num2 + num3 + num4 + num5;
    }
    var output = add(num1,num2,num3,num4,num5);

    $("#submission").click(function() {
      $("#output").text('You have scored' + output);
      });

  });
  event.preventDefault();
});
