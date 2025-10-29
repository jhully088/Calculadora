document.addEventListener("DOMContentLoaded", function(){
   
    function soma (a,b) {
     return a + b;
    }
     function subtrair (a,b) {
     return a - b;
    }
      function multiplicar (a,b) {
     return a * b;
    }
      function dividir (a,b) {
     return a / b;
    }
        let Valor1 =document.querySelector("#Valor1")
        let Valor2 = document.querySelector("#Valor2")

    document.querySelector('.btnSomar').addEventListener('click', function(){
       
        let resultado = soma(Number(Valor1.value), Number(Valor2.value));
        document.querySelector('#resultado').textContent = resultado;
    })
     document.querySelector('.btnSubtrair').addEventListener('click', function(){

        let resultado = subtrair(Number(Valor1.value), Number(Valor2.value));
        document.querySelector('#resultado').textContent = resultado;
    })
     document.querySelector('.btnMultiplicar').addEventListener('click', function(){
    
        let resultado = multiplicar(Number(Valor1.value), Number(Valor2.value));
        document.querySelector('#resultado').textContent = resultado;
    })
         document.querySelector('.btnDividir').addEventListener('click', function(){
     
        let resultado = dividir(Number(Valor1.value), Number(Valor2.value));
        document.querySelector('#resultado').textContent = resultado;
    })

        document.querySelector(".btnReset").addEventListener('click',function(){
        document.querySelector("#Valor1").value = 0;
        document.querySelector("#Valor2").value = 0;
        document.querySelector('#resultado').textContent = 0;
        } )


})



