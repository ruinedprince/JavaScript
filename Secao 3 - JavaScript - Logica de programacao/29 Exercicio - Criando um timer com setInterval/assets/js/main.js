const timer       = document.querySelector('.timer');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');
const initialDate = new Date("01-01-1970 00:00:00");

let date = new Date("01-01-1970 00:00:00");
let time;

function formatter(data) {
    return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'

    });

}

startButton.addEventListener('click', function timerRunning () {
    if(!time){
        timer.style.color = 'white';

        time = setInterval(function() {   // É possível colocar um setInterval() dentro de uma variável, fazendo com que seu valor seja atualizado conforme o período de tempo determinado.

            date = new Date(date.getTime() + 1000);
    
            let hour = formatter(date);
    
            timer.innerHTML = `${hour}`;
    
        }, 1000);

    } else {
        console.log('O timer já está funcionando.');

    }
    
});

pauseButton.addEventListener('click', function(e) {
    timer.style.color = 'red';

    if(time != null){
        clearInterval(time);

        time = null;    // setInterval = null permite que ele seja reiniciado. APRENDI VENDO A DOCUMENTAÇÃO B))))))

    } else {
        console.log('O timer já está pausado.');

    }

});

resetButton.addEventListener('click', function(e) {
    timer.style.color = 'white';

    if (date.getTime() !== initialDate.getTime()){
        clearInterval(time);

        time = null;
        
        timer.innerHTML = `00:00:00`;

    } else {
        console.log('O timer já está zerado.');
    }
});