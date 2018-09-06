//creating and setting global variables
var randomResult;
var win = 0;
var lost = 0;
var lastOne = 0;

var StartGame = function() {

    $(".crystals").empty();

    var images = [
        'https://cdn.leibish.com/media/gemstones/thumb_w800/gemstone-304918-sapphire-emerald-cornflower-7e1bc.jpg',
        'https://cdn.leibish.com/media/gemstones/thumb_1280/gemstone-143303-ruby-oval-red-62043.jpg',
        'https://cdn.leibish.com/media/gemstones/thumb_1280/gemstone-306170-emerald-emerald-green-cf129.jpg',
        'https://cdn.leibish.com/media/gemstones/thumb_w800/gemstone-295991-aquamarine-oval-blue-8f941.jpg']; 
    
    // create a random variable with our function that will store and display as the desired number to reach value 19 - 120
    randomResult = Math.floor(Math.random() * 89 ) + 30;

    $("#result").html('Random Number: ' + randomResult);
    // creates 4 new divs
    for (var i = 0; i < 4; i++) {  
   
    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);
   
    
   
    var crystal = $("<div>");
       // add our classes to variables
        crystal.attr({
           "class": 'crystal',
           "data-random": random
       }); 
       // add our images to variables
       crystal.css({
           "background-image":"url('" + images[i] + "')",
           "background-size": "cover"
       })
    //crystal.html(random);
        $(".crystals").append(crystal);
        }

        $("#lastOne").html("Your Total Score: " + lastOne);
}
// call the funciton
StartGame();

$(document).on('click', ".crystal", function (){

    var number = parseInt($(this).attr('data-random'));
    lastOne += number;
    $("#previous").html("Total Score: " + lastOne);
    
    //console.log(lastOne);
    // create an if else statement that will compare our score with random number,
    // will push wins or losses, alert user if they lost or won, reset game when turn is up
    if (lastOne > randomResult){
        lost ++;
        $('#lost').html("You Lost: " + lost);
        lastOne = 0;
        StartGame();
    }
    else if (lastOne === randomResult){
        win ++;
        $('#win').html("You Won: " +  win);
        lastOne = 0;
        StartGame();
    }
}); 