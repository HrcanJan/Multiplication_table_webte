function display (){
  row = document.forms["myForm"]["X"].value;
  col = document.forms["myForm"]["Y"].value;

  if(row > 0 && row < 10 && col > 0 && col < 10){
    document.getElementById("above").classList.toggle("active");
    document.getElementById("above").style.display = "block";

    var x = document.createElement("div");
    x.style.cursor = "pointer";

    x.style.height = "20px";
    x.style.width = "20px";
    x.style.marginBottom = "10px";
    x.style.backgroundColor = "red";
    x.style.borderRadius = "10%";

    x.addEventListener("click", function() {
      document.getElementById("above").classList.toggle("active");
      document.getElementById("above").style.display = "none";
      document.getElementById("content").innerHTML = "";
    });

    document.getElementById("content").appendChild(x);

    // https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i <= row; i++) {

      var r = document.createElement("tr");
      for (var j = 0; j <= col; j++) {

        var cell = document.createElement("td");

        if(i == 0 && j == 0)
          var cellText = document.createTextNode("X * Y");
        else if(i == 0)
          var cellText = document.createTextNode("Y = " + j);
        else if(j == 0)
          var cellText = document.createTextNode("X = " + i);
        else
          var cellText = document.createTextNode(i * j);
        cell.appendChild(cellText);
        r.appendChild(cell);
      }
      
      tblBody.appendChild(r);
    }

    tbl.appendChild(tblBody);
    document.getElementById("content").appendChild(tbl);
    tbl.setAttribute("border", "2");
    tbl.setAttribute("box-sizing", "border-box");
  }
  
}

function validateNum1(){

  var row = document.forms["myForm"]["X"].value;

  if(row < 1 || row > 9){
    document.getElementById("divx").innerHTML = "Only numbers 1 - 9";
    document.getElementById("divx").style.color = "Red";
    document.getElementById("divx").style.fontSize = "17px";
  }
  
  if(row ==''){
    document.getElementById("divx").innerHTML= "Do not leave empty";
    document.getElementById("divx").style.color = "Red";
    document.getElementById("divx").style.fontSize = "17px";
  }

  if(row > 0 && row < 10){
    document.getElementById("divx").innerHTML= "";
  }
}

function validateNum2(){
  var col = document.forms["myForm"]["Y"].value;

  if(col < 1 || col > 9){
    document.getElementById("divy").innerHTML = "Only numbers 1 - 9";
    document.getElementById("divy").style.color = "Red";
    document.getElementById("divy").style.fontSize = "17px";
  }

  if(col ==''){
    document.getElementById("divy").innerHTML= "Do not leave empty";
    document.getElementById("divy").style.color = "Red";
    document.getElementById("divy").style.fontSize = "17px";
  }

  if(col > 0 && col < 10){
    document.getElementById("divy").innerHTML= "";
  }
}