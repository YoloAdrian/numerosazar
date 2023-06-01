var numazar;
var cont;

function azar() {
    numazar = Math.floor(Math.random() * 100) + 1;
    cont = 0;
    console.log("Se ha generado un numero al azar");
}

function func() {
    const encontrar = parseInt(document.getElementById('num1').value);
    cont++;

    if (encontrar === numazar) {
        console.log('Adivinaste el número lo intentaste ' + cont + ' veces')
    } else if (encontrar < numazar) {
        console.log('Sigue intentando el numero es mayor')
    } else {
        console.log('Sigue intentando el numero es menor.')
    }
}


