//Digital clock function
function startTime() {
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h+":"+m+":"+s;
  var t = setTimeout(function(){startTime()},500);
}
function checkTime(i) {
  if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
// calculator function
//global declaration
var number = "",
total = 0,
regexp = /[0-9]/,
mainScreen = document.getElementById("mainScreen");
MAXLENGTH = 12;
var max = "";

// InputSymbol
function InputSymbol(num) {
  var cur = document.getElementById(num).value;
  var prev = number.slice(-1);

  if(number.length > MAXLENGTH) {
     alert("Number Exceeds Character Limit")
      return;
  }

  else if (!regexp.test(prev) && !regexp.test(cur)) {
    console.log("Two calculation can not be performed ;");
    return;
}
else{
  number = number.concat(cur);
  mainScreen.innerHTML = number;
}
}


function CalculateTotal() {
  total = (Math.round(eval(number) * 100) / 100);
  mainScreen.innerHTML = total;
}

// Delete
function DeleteLastSymbol() {
  if (number) {
    number = number.slice(0, -1);
    mainScreen.innerHTML = number;
  }
  if (number.length === 0) {
    mainScreen.innerHTML = "0";
  }
}

function clearAll() {
  number = "";
  total = 0;
  mainScreen.innerHTML = 0;
}
