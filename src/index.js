import "./styles.css";

document.getElementById("board").innerHTML = `

<h1>Tic Tac Toe</h1>


<h2>PLAYER 1 plays with X</h2>
<h3>PLAYER 2 plays with O </h3`;

var counter = 0;

var myVar;

var body = document.body,
  table = document.createElement("table");

var elem = document.getElementById("myBar");

var width = 0;

function createTable() {
  for (var i = 0; i < 5; i++) {
    var tableRow = table.insertRow();
    for (var j = 0; j < 5; j++) {
      if (i === 1 && j === 5) {
        break;
      } else {
        var tableCell = tableRow.insertCell();
        var cellText = document.createTextNode("");
        tableCell.appendChild(cellText);
        if (i === 1 && j === 1) {
          tableCell.setAttribute("rowSpan", "1");
        }
      }
    }
  }
}

createTable();

body.appendChild(table);

onclick(table);

function onclick(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].onclick = function() {
        tableText(this);
      };
    }
  }
}

function tableText(tableCell) {
  move();
  myStopFunction();
  if (counter % 2 === 0) {
    if (tableCell.innerHTML === "") {
      tableCell.style.backgroundColor = "rgb(124, 252, 0)";
      tableCell.innerHTML = "X";
      whoWon(table);
      checkDraw(table);
      myFunction();
      counter++;
    } else {
      alert("Pick other cell, it's already populated:(");
    }
  } else {
    if (tableCell.innerHTML === "") {
      tableCell.innerHTML = "O";
      tableCell.style.backgroundColor = "rgb(250, 128, 114)";
      whoWon(table);
      checkDraw(table);
      myFunction();
      counter++;
    } else {
      alert("Cell already used");
    }
  }
}

function whoWon(table) {
  var cumulative = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var vaaka1 = 0;
    var vaaka2 = 0;
    var vaaka3 = 0;
    var vaaka4 = 0;
    var vaaka5 = 0;
    var pysty1 = 0;
    var pysty2 = 0;
    var pysty3 = 0;
    var pysty4 = 0;
    var pysty5 = 0;
    var viisto1 = 0;
    var viisto2 = 0;

    for (var j = 0; j < 5; j++) {
      if (table.rows[0].cells[j].innerHTML === cumulative[i]) {
        vaaka1++;
      }
      if (table.rows[1].cells[j].innerHTML === cumulative[i]) {
        vaaka2++;
      }
      if (table.rows[2].cells[j].innerHTML === cumulative[i]) {
        vaaka3++;
      }
      if (table.rows[3].cells[j].innerHTML === cumulative[i]) {
        vaaka4++;
      }
      if (table.rows[4].cells[j].innerHTML === cumulative[i]) {
        vaaka5++;
      }
      if (table.rows[j].cells[0].innerHTML === cumulative[i]) {
        pysty1++;
      }
      if (table.rows[j].cells[1].innerHTML === cumulative[i]) {
        pysty2++;
      }
      if (table.rows[j].cells[2].innerHTML === cumulative[i]) {
        pysty3++;
      }
      if (table.rows[j].cells[3].innerHTML === cumulative[i]) {
        pysty4++;
      }
      if (table.rows[j].cells[4].innerHTML === cumulative[i]) {
        pysty5++;
      }
      if (table.rows[j].cells[j].innerHTML === cumulative[i]) {
        viisto1++;
      }
      var reduce = 4 - j;
      if (table.rows[j].cells[reduce].innerHTML === cumulative[i]) {
        viisto2++;
      }
    }

    if (
      vaaka1 === 5 ||
      vaaka2 === 5 ||
      vaaka3 === 5 ||
      vaaka4 === 5 ||
      vaaka5 === 5 ||
      pysty1 === 5 ||
      pysty2 === 5 ||
      pysty3 === 5 ||
      pysty4 === 5 ||
      pysty5 === 5 ||
      viisto1 === 5 ||
      viisto2 === 5
    ) {
      if (cumulative[i] === "X") {
        alert("Player 1 won!");
        clearTable(table);
        counter = 1;
      }

      if (cumulative[i] === "O") {
        alert("Player 2 won!");
        clearTable(table);
        counter = 1;
      }
    }
  }
}

function clearTable(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].innerHTML = "";
    }
  }

  for (var k = 0, row; (row = table.rows[k]); k++) {
    for (var h = 0, col; (col = row.cells[h]); h++) {
      col.style.backgroundColor = "white";
    }
  }
}

function checkDraw(table) {
  var count = 0;
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++)
      if (
        table.rows[i].cells[j].innerHTML === "X" ||
        table.rows[i].cells[j].innerHTML === "O"
      ) {
        count++;
      }
  }
  if (count === 25) {
    alert("It's a draw!");
    clearTable(table);
    counter = 0;
  }
}

function clearWidth() {
  width = 0;
  elem.style.width = width + "%";
  elem.innerHTML = width + "%";
}

function move() {
  clearWidth();
  clearInterval(id);
  var width = 0;
  var id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      clearWidth();
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = Math.round(width / 10) + "s";
    }
  }
}

function myFunction() {
  myVar = setTimeout(TimeOut, 10000);
}

function myStopFunction() {
  clearTimeout(myVar);
}

function TimeOut() {
  alert("TIMEOUT!");
  move();
  counter++;
}
