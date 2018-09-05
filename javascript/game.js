var randomResult;
var win = 0;
var lost = 0;
var lastOne = 0;

var resetAndStartGame = function() {

    $(".crystals").empty();

    var images = [
        'https://cdn.leibish.com/media/gemstones/thumb_w800/gemstone-304918-sapphire-emerald-cornflower-7e1bc.jpg',
        'https://cdn.leibish.com/media/gemstones/thumb_1280/gemstone-143303-ruby-oval-red-62043.jpg',
        'https://cdn.leibish.com/media/gemstones/thumb_1280/gemstone-306170-emerald-emerald-green-cf129.jpg',
        'https://cdn.leibish.com/media/gemstones/thumb_w800/gemstone-295991-aquamarine-oval-blue-8f941.jpg']; 

randomResult = Math.floor(Math.random() * 89 ) + 30;

$("#result").html('Random Number: ' + randomResult);

for (var i = 0; i < 4; i++) {  
   
   var random = Math.floor(Math.random() * 11) + 1;
   //console.log(random);
   
   
    var crystal = $("<div>");
       crystal.attr({
           "class": 'crystal',
           "data-random": random
       }); 
       crystal.css({
           "background-image":"url('" + images[i] + "')",
           "background-size": "cover"
       })
   //crystal.html(random);
$(".crystals").append(crystal);
    }

$("#lastOne").html("Your Total Score: " + lastOne);
}

resetAndStartGame();

$(document).on('click', ".crystal", function (){

    var num = parseInt($(this).attr('data-random'));
    lastOne += num;
    $("#previous").html("Total Score: " + lastOne);
    console.log(lastOne);

    if (lastOne > randomResult){
        lost ++;
        $('#lost').html("You Lost: " + lost);
        lastOne = 0;
        resetAndStartGame();
    }
    else if (lastOne === randomResult){
        win ++;
        $('#win').html("You Won: " +  win);
        lastOne = 0;
        resetAndStartGame();
    }
}); 