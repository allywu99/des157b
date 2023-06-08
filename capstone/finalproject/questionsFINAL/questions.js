(function(){

    "use strict";
    console.log("js running");

    //Instructions
    const rules = document.getElementById("instructions");
    const all = document.getElementById("all");

     //Question2, Response2
    const q2 = document.getElementById("q2");
    const response2 = document.getElementById("response2");

    //Buttons
    const learnMore = document.getElementById("toggleOverlay");
    const learnOverlay = document.getElementById("learnMore");
    const closeOverlay = document.getElementById("closeX");
    const nextButton = document.getElementById("nextButton");
    const closeInstructions = document.getElementById("closeRules");
    const openInstructions = document.getElementById("openRules");

    //Allyson
    const radioContainers = q1.querySelectorAll(".radio");
    const submitButton = document.getElementById("submitButton");
    
    const q2ans = document.getElementById("q2_ans");
    const q3 = document.getElementById("q3");
    const q3ans = document.getElementById("q3_ans");
    const checkboxes = q2.querySelectorAll("input[type='checkbox']");
    const submitButton2 = document.getElementById("submitButton2")
    const submitButton3 = document.getElementById("submitButton3")
    const q1ans = document.getElementById("q1_ans");
    const finalScreen = document.getElementById("final");

    let prog = document.getElementById("quizProg");

    // INSTRUCTIONS OVERLAY SCRIPT
    openInstructions.addEventListener("click", function(){
        rules.className="show";
        all.className="show";
    });


    closeInstructions.addEventListener("click", function(){
        rules.className="hide";
        all.className="hide";
    });


    document.getElementById("closeOverlay1").addEventListener("click", function(){
        susan1.className="hide";
    })

    // LEARN MORE OVERLAY SCRIPT
    
    learnMore.addEventListener("click", function(event) {
      event.preventDefault();
      learnOverlay.className="show";
    });
    
    closeOverlay.addEventListener("click", function(event) {
      event.preventDefault();
      learnOverlay.className="hide";
    });

    //LEARN MORE 2
    const learnMore2 = document.getElementById("toggleOverlay2");
    const learnOverlay2 = document.getElementById("learnMore2");
    const closeOverlay2 = document.getElementById("closeX2");
    const nextButton2 = document.getElementById("nextButton2");

    learnMore2.addEventListener("click", function(event) {
      event.preventDefault();
      learnOverlay2.className="show";
    });
    
    closeOverlay2.addEventListener("click", function(event) {
      event.preventDefault();
      learnOverlay2.className="hide";
    });

        //LEARN MORE 3
        const learnMore3 = document.getElementById("toggleOverlay3");
        const learnOverlay3 = document.getElementById("learnMore3");
        const closeOverlay3 = document.getElementById("closeX3");
        const nextButton3 = document.getElementById("nextButton3");
    
        learnMore3.addEventListener("click", function(event) {
          event.preventDefault();
          learnOverlay3.className="show";
        });
        
        closeOverlay3.addEventListener("click", function(event) {
          event.preventDefault();
          learnOverlay3.className="hide";
        });

    function updateSubmitButtonState() {
        if (q1.querySelector("input[value]:checked")) {
          submitButton.disabled = false;
          submitButton.classList.add("enabled");
        } else {
          submitButton.disabled = true;
          submitButton.classList.remove("enabled");
        }
      }
      
      radioContainers.forEach((radioContainer) => {
        const radioButtons = radioContainer.querySelectorAll("input[type='radio']");
        radioButtons.forEach((radioButton) => {
          radioButton.addEventListener("change", updateSubmitButtonState);
          if (radioButton.checked) {
            updateSubmitButtonState();
          }
        });
      });
      
      // Update the submit button state on form load
      updateSubmitButtonState();   
  
      document.getElementById("q1").addEventListener("submit", function(event) {
        event.preventDefault();
        q1.className = "hide";
        q1ans.className = "show";
    });

      document.getElementById("q1_ans").addEventListener("submit", function(event) {
        event.preventDefault();
        q1.className = "hide";
        q1ans.className = "hide";
        q2.className = "show";
        prog.value = 66.66; 
});

      submitButton2.addEventListener("click", function(event){
          event.preventDefault();
          q2.className = "hide";
          q2ans.className = "show";
      });

      nextButton2.addEventListener("click", function(event){
        event.preventDefault();
        q2ans.className = "hide";
        q3.className = "show";
        prog.value = 90; 
      });

      submitButton3.addEventListener("click", function(event){
        event.preventDefault();
        q3.className = "hide";
        q3ans.className = "show";
      });

      nextButton3.addEventListener("click", function(event){
        event.preventDefault();
        q3ans.className = "hide";
        finalScreen.className = "show";
        prog.value = 100; 
      });


})();