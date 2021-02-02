console.log("test");

var rows = document.querySelectorAll("td");
for (var row of rows) {
  row.addEventListener("click", handler);
}

// var winnigarray = [
//   [0, 1, 2][(3, 4, 5)][(6, 7, 8)][(0, 3, 6)][(1, 4, 7)][(2, 5, 8)][(0, 4, 8)][
//     (2, 4, 6)
//   ],
// ];

var counter = 0;
function handler() {
  if (this.innerHTML === "") {
    counter++;
    if (counter % 2 === 0) {
      this.innerHTML = "O";
    } else {
      this.innerHTML = "X";
    }
  }
  check();
}

//! Hardcoded meth example:
function check() {
  if (
    document.getElementById("td1").innerHTML === "X" &&
    document.getElementById("td5").innerHTML === "X" &&
    document.getElementById("td9").innerHTML === "X"
  ) {
    alert("playerXwin");
  }
}

function mtx() {
  var td1 = document.getElementById("td1").innerHTML;
  var td2 = document.getElementById("td2").innerHTML;
  var td3 = document.getElementById("td3").innerHTML;
  var td4 = document.getElementById("td4").innerHTML;
  var td5 = document.getElementById("td5").innerHTML;
  var td6 = document.getElementById("td6").innerHTML;
  var td7 = document.getElementById("td7").innerHTML;
  var td8 = document.getElementById("td8").innerHTML;
  var td9 = document.getElementById("td9").innerHTML;

  var array1 = [td1, td2, td3];
  var array2 = [td4, td5, td6];
  var array3 = [td7, td8, td9];

  // for loop meth
  //  function enter() {
  //     for (var row = 0; row < 3; row++) {
  //       for (var col = 0; col < 3; col++)
  //         matrix[row][col].innerHTML;
  //     }
  //   }

  var matrix = new Array(array1, array2, array3);

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (matrix[i][j] !== "") {
      }
    }
  }
}
