var inputData = document.getElementById("data");
var button = document.getElementById("btn");

btn.addEventListener("click", function () {
  var input = inputData.value;
  var output = "";

  console.log(input);

    if (input == "") {
        alert("Fill Number In The Box!");
    } else if (input <= 0 ) {
        output = "Invalid Input Number!";
    } else {
        if (input % 3 == 0 && input % 5 == 0) {
            output = "FizzBuzz!";
        } else if (input % 3 == 0) {
            output = "Fizz!";
        } else if (input % 5 == 0) {
            output = "Buzz!";
        } else {
            output = input;
        }
    }

  var p = document.createElement("p");
  p.textContent = output;

  var result = document.getElementById("result");
  result.appendChild(p);
});
