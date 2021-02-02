console.log("test");

var rows = document.querySelectorAll("td");
for (var row of rows) {
  row.addEventListener("click", handler);
}

var counter = 0;
function handler() {
  counter++;
  if (counter % 2 === 0) {
    this.innerHTML = "O";
  } else {
    this.innerHTML = "X";
  }
}
