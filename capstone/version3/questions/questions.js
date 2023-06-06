(function(){

    "use strict";
    console.log("js running");

    const susan1 = document.getElementById("susan1");
    const susan2 = document.getElementById("susan2");
    const response2 = document.getElementById("response2");
    const question3 = document.getElementById("q3");
    const learnMore = document.getElementById("learnmore");
    const nextButton = document.getElementById("nextButton");


    document.getElementById("closeOverlay1").addEventListener("click", function(){

        susan1.className="hide";


    })

    learnMore.addEventListener("click", function(){

        response2.className="hide";
        susan2.className= "show";

    });

    nextButton.addEventListener("click", function(){

        response2.className="hide";
        question3.className="show";


    })
    ;

})();