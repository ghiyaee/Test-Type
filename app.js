let rest = document.getElementById("rest");
let p = document.querySelector("p").innerHTML;
let brdr = document.getElementById("brdr");
let color = document.getElementById("int");

document.getElementById("int").addEventListener("keyup", read);
document.getElementById("int").addEventListener("keypress", start);
// document.getElementById("stop_cor").addEventListener("click", set);
function load() {
 color.focus()
}
load()
rest.addEventListener("click", newup);

let cor = [0, 0, 0, 0];
let ch = true;
let stp;
let st = true;

function timeer() {
  if ((cor[3] += 10) == 1000) {
    cor[3] = 0;
    cor[2]++;
  }
  if (cor[2] == 60) {
    cor[2] = 0;
    cor[1]++;
  }
  if (cor[1] == 60) {
    cor[1] = 0;
    cor[0]++;
  }
  document.getElementById("hour").innerText = returnData(cor[0]);
  document.getElementById("minute").innerText = returnData(cor[1]);
  document.getElementById("second").innerText = returnData(cor[2]);
  document.getElementById("millisecond").innerText = returnData(cor[3]);
}

function set() {
  if (ch == true) {
    (stop = setInterval(timeer, 10)), (ch = false);
  } else {
    clearInterval(stop), (ch = true);
  }
}
function returnData(input) {
  return input >= 10 ? input : `0${input}`;
}

function start() {
  if (st) {
    stp = setInterval(timeer, 10);
    st = false;
  }
 
}

function read() {
  var int = document.getElementById("int").value;
  let char = p.substring(0, int.length);
  if (p == int) {
    color.style.backgroundColor = "green";
    color.style.color = "white";
    clearInterval(stp);
  } else {
    if (char == int) {
      brdr.style.borderColor = "yellow";
    } else {
      brdr.style.borderColor = "red";
    }
    if (!int) {
      clearInterval(stp);
      newup();
    }
  }
}

function newup() {
  document.getElementById("hour").innerText = 0 + "" + 0;
  document.getElementById("minute").innerText = 0 + "" + 0;
  document.getElementById("second").innerText = 0 + "" + 0;
  document.getElementById("millisecond").innerText = 0 + "" + 0 + "" + 0;
  int.value = "";
  color.style.backgroundColor = "white";
  color.style.color = "black";
  brdr.style.borderColor = "black";
  st = true;
  clearInterval(stp);
}
