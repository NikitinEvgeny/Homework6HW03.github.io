
let text = document.querySelector('#text');

document.querySelector('#consoleLog').onclick = function() {
    console.log('служит для вывода информации в консоль');
};

document.querySelector('#alert').onclick = function() {
    alert('выводит на экран пользователя модальное окно с каким-нибудь текстом');
};


document.querySelector('#prompt').onclick = function() {
 let textPromt =  prompt('Как вас зову? ');
 text.style.visibility = 'visible';
 text.style.color = 'red';
 text.textContent = "Привет " + textPromt + " !!!!!!!";
 
 
 if (textPromt == null)
    {
        text.textContent = "Привет незнакомец."
    }
    if (textPromt == "")
        {
            text.textContent = "Привет незнакомец."
        }
};


