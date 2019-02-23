//Business Logic
var add = function(color, environment, style, music, food, work, sport) {
  return color + environment + style + music + food + work + sport;
};


//User Interface
$(document).ready(function(){
  $("#quiz").submit(function(event){
    var color = parseInt($("input:radio[name=color]:checked").val());
    var environment = parseInt($("input:radio[name=environment]:checked").val());
    var style = parseInt($("input:radio[name=style]:checked").val());
    var music = parseInt($("input:radio[name=music]:checked").val());
    var food = parseInt($("input:radio[name=food]:checked").val());
    var work = parseInt($("input:radio[name=work]:checked").val());
    var sport = parseInt($("input:radio[name=sport]:checked").val());
    var result = add(color, environment, style, music, food, work, sport, result);


    if (result <= 4) {
      villain = "Him!";
      traits = "You're love...";
    } else if (result <= 9) {
      villain = "Mojo Jojo!";
      traits = "You're often..";
    } else if (result <= 14) {
      villain = "Fuzzy Lumpkins";
      traits = "You are...";
    } else if (result <= 19) {
      villain = "the RowdyRuff Boys!";
      traits = "You are...";
    } else if (result <= 23) {
      villain = "the GangGreen Gang!";
      traits = "You are..."
    }
    $("#villain").text(villain);
    $("#answer").show();
    $("#traits").text(traits);


    event.preventDefault();

  });
});
