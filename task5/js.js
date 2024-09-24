let inputText =  document.querySelector("#inputText");
let button  =  document.querySelector("button");
let blokText = document.querySelector("#duplicateField");
let arr = [];
let stroca;

window.addEventListener("keydown", klic, false);

function klic(event) 
{ 

  arr.push(event.key)
  stroca = arr.length - 1; 
  if (arr[stroca] == "Backspace")
  {
   arr.pop(event.key);
   arr.pop(event.key);
  }
  blokText.textContent = arr.join("");

};

