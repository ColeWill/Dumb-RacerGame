  //run this whole thing when doc loads
$(document).ready(function(){
    alert("tap your key alot to win! 3.... 2.... 1.... GO!!!");
    //grab both div htmls and chnage css 
    $("div").css("position", "relative");

    //grab the doc, call 'move' func any time key is pressed
    $(document).bind('keyup', move);
    function move(e){
        //if n call moveThis func w/ n as argument
        //function is cathcing the thing the bind is giving us
        if(e.which==65) {
            moveThis("a");
        }
        //if s call moveThis func w/ s as argument
        else if ( e.which==76) {
            moveThis("l");
        }
    }
    function moveThis(key){
        //need to get pone or ptwo  
        //depending on which key grab that div

        //declare var divSelectionText and give it intial val of empty string
        var divSelectionText = "";
        //key argument === n , using letter to know which player and grabbing their div
        if(key === "a"){
        //storing player 1's id AS A STRING!!! in divSelectionText variable
            divSelectionText = '#racerOne';
        }
        //if key argument === s store player 2's id in divSelectionText variable
        else if(key === "l"){
            divSelectionText = '#racerTwo';
        }
        /*
        we wanted to add to the current value of the left property
        so we start by setting the current value...
        ... and then we get the current value and add to it
        */

        // store diveToMove's parsed left css value (now a number) in currentLeft Variable
        var currentLeftLocation = parseInt($(divSelectionText).css("left")); //"left" gives the value of {left: 20px} 20px needs to be parsed into a number
        //jQuery is using divSelectionText variable and add +20 to currentleft (a variable) and concatenate it with px to make it work in css ("has to be a string")
        //contains a srting with the name of the div whose css we want to alter, when the string is passed into jQuery becomes the html element and
        //                          ....here we unParse currentLeft and turn it back into a string that can be used in css (something px)
        $(divSelectionText).css("left", (currentLeftLocation+2) + "px");
        
        
        //is current left = to 300px?

        //this is the win condition

        //we take the px value off of the css Left value and compare it to our win condition 
        if (parseInt($(divSelectionText).css("left")) >= 300 ){
            //grab the span and change the text to the string that is saved in divSelectionText which is "" +"reached 300"
            //divSelection text contains a string, the string is the div's id, we use it in the jQuery line...
            //...and it becomes an html element, and then we grab the id of that element ... ;) then we concatenate it into another string to display the winner!!
            $("span").text($(divSelectionText).attr('id') + "reached 300px!");
            $("span").css("color","red");
            $("span").css("font-size","150px");
            $
            //want to end the function
            $(document).unbind();
            //unbind removes the ability of a keystroke to call the code
        }
        else {
          $("span").text(" Nope");
        }
    }

});