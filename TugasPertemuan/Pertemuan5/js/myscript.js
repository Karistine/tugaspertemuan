function changeColor(color) {
    document.getElementById('myTable').style.backgroundColor = color;
}

function displayDate() {
    document.getElementById("date").innerHTML = "Date and Time : " + Date();
}

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try { 
    if(x.trim() == "")  throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 100)   throw "is too high";
    if(x < 1)  throw "is too low";
  }
  catch(err) {
    alert("Input " + err);
  }
  finally {
    document.getElementById("demo").value = "";
  }
}

function myFunction1() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}