
const  link = document.querySelector('#test');
link.addEventListener('click', 
    function(event)
  {
    event.preventDefault();

});

link.addEventListener('click', 
    function(){
    let text =  prompt ('введите текст ссылки');
    link.textContent = text; 
     if (text=="" )
     {
      link.textContent = "В ведите текст ссылки"
     }
     if (text == null)
      {
        link.textContent = "В ведите текст ссылки"
      }
  });