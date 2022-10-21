var input = document.querySelector('.input');
var items = Array.from(document.querySelectorAll('.item'));
items.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(input.innerHTML=='0') // avoid display case 0123
        input.innerHTML='';
        if(btn.innerHTML=='AC')
        input.innerHTML='0';
        else if(btn.innerHTML=='DEL'){
            var arrtext = Array.from(input.innerHTML); //string -> array
            arrtext.splice(arrtext.length-1,1); //remove the last character
            if(arrtext.length!=0)
            input.innerHTML = arrtext.join('');
            else input.innerHTML='0';
        }
        else if(btn.innerHTML=='='){
            input.innerHTML=eval(input.innerHTML);
        }
        else input.innerHTML += btn.innerHTML;
    })
})