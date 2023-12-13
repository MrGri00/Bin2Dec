document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("input").addEventListener("input", validate);
});

function calculate() {
  var input = document.getElementById("input").value;
  var base = document.getElementById("select").value;

  var result = "";

  switch (base) {
    case "binary":
      // TODO: Convert to decimal
      result = parseInt(input, 2);
      break;
    case "decimal":
      // TODO: Convert to binary
      result = parseInt(input, 10);
      break;
  }

  console.log(result);
  document.getElementById("result").innerHTML = "result.toString()";
}

function validate() {}
