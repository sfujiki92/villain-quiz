//Business Logic
var add = function(color, environment, style, music, food, work, sport) {
  return color + environment + style + music + food + work + sport;
};


//User Interface
$(document).ready(function(){
  $("#quiz").submit(function(event){
    var nameInput = $("input#name").val();
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
      villainImage = "img/him.gif";
      traits = "You have a love for the finer things in life - high fashion, gourmet food, classical music - you name it!  You're a drama queen and love to manipulate others to get your way.";
    } else if (result <= 9) {
      villain = "Mojo Jojo!";
      villainImage = "img/mojo.gif";
      traits = "You're a master of trickery and can often fool the PowerPuff Girls.  Though highly intelligent, you let your ego get in the way of accomplishing your plans.";
    } else if (result <= 14) {
      villain = "Fuzzy Lumpkins!";
      villainImage = "img/fuzzy.gif";
      traits = "You enjoy solitude, away from the hustle and bustle.  You're protective of your belongings and will attack anyone who dares to  cross you.";
    } else if (result <= 18) {
      villain = "the RowdyRuff Boys!";
      villainImage = "img/rowdy.gif";
      traits = "You love to wreak havoc in Townsville, but you must be careful!  An obsession with destruction often times causes your downfall against the PowerPuff Girls.";
    } else if (result <= 23) {
      villain = "the Gang Green Gang!";
      villainImage = "img/ganggreen.gif";
      traits = "You cause trouble for the fun of it. You enjoy vandalizing Townsville and harassing its citizens. The streets belong to you - why doesn't anyone else understand that?"
    }

    $("#answer").fadeIn();
    $(".name").text(nameInput);
    $("#villain").text(villain);
    $("#villain-image").attr("src",villainImage);
    $("#villain-image").show();
    $("#traits").text(traits);


    event.preventDefault();

  });
});
