let inputText =  document.querySelector("#inputText");
let button  =  document.querySelector("button");
let blokText = document.querySelector("#duplicateField");
let text = [];
let number;

inputText.addEventListener("keydown", copyText);
button.addEventListener("click", clickButton);

function copyText(event) 
{ 

  text.push(event.key)
  number = text.length - 1; 
  if (text[number] == "Backspace")
  {
    text.pop(event.key);
    text.pop(event.key);
  }
else if (text[number] == "Enter")
   {
    text.pop(event.key);
   }

   else if (text[number] == "Shift")
    {
      text.pop(event.key);
    }

    else if (text[number] == "CapsLock")
      {
        text.pop(event.key);
      }

      else if (text[number] == "Alt")
        {
          text.pop(event.key);
        }
   
 

  blokText.textContent = text.join("");

};




function clickButton() 
{ 

  console.log(blokText.textContent);
  blokText.textContent = blokText.textContent.substring(0, -1);
  inputText.value = '';
  text.length = 0;


};



