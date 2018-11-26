var rIndex,
  table = document.getElementById("table");


function checkEmptyInput() {
  var isEmpty = false,

    exampleInputWrite = document.getElementById("exampleInputWrite").value,
    date = document.getElementById("date").value;

  if (exampleInputWrite === "") {
    alert("Text Connot Be Empty");
    isEmpty = true;
  }
  else if (date === "") {
    alert("Date Connot Be Empty");
    isEmpty = true;
  }

  return isEmpty;
}

function addHtmlTableRow() {

  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),

      date = document.getElementById("date").value,
      exampleInputWrite = document.getElementById("exampleInputWrite").value;


    cell1.appendChild(createCheckBox("id"));
    cell2.innerHTML = date;
    cell3.innerHTML = exampleInputWrite;
    cell4.appendChild(createImage());


    //selectedRowToInput();
  }
}

function createCheckBox() {
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.style.zoom = "2";
  return checkbox;
}

function createImage() {
  var img = document.createElement("input");
  img.type = "image";

  img.src = "img/delete.png";
  img.addEventListener("click", function(){
    img.parentNode.parentNode.remove();
    //table.removeChild(img.parentNode.parentNode);
  });
  return img;
}
function removeSelectedRow() {


  for (var i = 1; i < table.rows.length; i++) {

    if (table.rows[i].cells[0].firstChild.checked) {
      table.deleteRow(i);
      i--;
    }

  }


}
