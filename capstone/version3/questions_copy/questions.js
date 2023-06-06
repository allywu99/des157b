(function(){
    'use strict';
    console.log("js working");

    //Make sure forms are blank when page reloads
      
      
    //JS FOR SUBMIT BUTTONS 
    const q1 = document.getElementById("q1");
    const q1ans = document.getElementById("q1_ans")
    const radioContainers = q1.querySelectorAll(".radio");
    const submitButton = document.getElementById("submitButton");
    const q2 = document.getElementById("q2");
    const q2ans = document.getElementById("q2_ans");
    const checkboxes = q2.querySelectorAll("input[type='checkbox']");
    const submitButton2 = document.getElementById("submitButton2")
    const prog = document.getElementById("quizProg");
    
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
});
  //OVERLAY JAVASCRIPT
  function closeOverlay() {
    var overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
  }
  
  document.getElementById("toggleOverlay").addEventListener("click", function(event) {
    event.preventDefault();
    var overlay = document.querySelector(".overlay");
    if (overlay.style.display === "none") {
      overlay.style.display = "block";
    } else {
      overlay.style.display = "none";
    }
  });
  
  document.querySelector(".closebtn").addEventListener("click", closeOverlay);

  function updateSubmitButtonState2() {
    if (q2.querySelector("input[value]:checked")) {
      submitButton2.disabled = false;
      submitButton2.classList.add("enabled");
    } else {
      submitButton2.disabled = true;
      submitButton2.classList.remove("enabled");
    }
  }
  
  checkboxes.forEach((checkbox) => {
    const checkboxes = radioContainer.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", updateSubmitButtonState2);
      if (checkbox.checked) {
        updateSubmitButtonState2();
      }
    });
  });
  
  // Update the submit button state on form load
  updateSubmitButtonState2(); 
  
})();