(function(){
    'use strict';
    console.log("js working");

    //Make sure forms are blank when page reloads
      
      
    //JS FOR SUBMIT BUTTONS 
    const form = document.getElementById("q1");
    const radioContainers = form.querySelectorAll(".radio");
    const submitButton = document.getElementById("submitButton");
    
    function updateSubmitButtonState() {
      if (form.querySelector("input[value]:checked")) {
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
    
})();