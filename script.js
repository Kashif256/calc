let outputScreen = document.getElementById("output");

function display(number) {
  outputScreen.value += number;
}
function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid Number");
  }
}
function Clear() {
  outputScreen.value = "";
}
function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
