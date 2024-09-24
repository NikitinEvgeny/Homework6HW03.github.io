
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

  });