(function(){

const q1page = document.getElementById("q1");
const r1page = document.getElementById("response1");
const submit1 = document.getElementById("submit1");
const input = document.querySelectorAll("input");

function buttonThing() {

    const sd = document.forms["Form1"]["q1.0"].value;
    const dis = document.forms["Form1"]["q1.1"].value;
    const neu = document.forms["Form1"]["q1.2"].value;
    const agr = document.forms["Form1"]["q1.3"].value;
    const stragr = document.forms["Form1"]["q1.4"].value;

}

if (input === true) {

    submit1.style.backgroundColor="blue";
    console.log("it's true");

} else {

    submit1.style.color="";

}

submit1.addEventListener("click", function(){

    q1page.className="hide";
    r1page.className="show";

});

})();