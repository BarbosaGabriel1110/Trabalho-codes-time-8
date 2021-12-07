document.addEventListener("DOMContentLoaded", function(){

    h3s = document.querySelectorAll('h3')
    continuar = h3s[0]

    opcoes = document.querySelectorAll('option')

    var select = document.getElementById('cidades');

    function myScript(){
        cidade = select.value
    }

    select.addEventListener("change", myScript);

    continuar.addEventListener('click', function(event) {
        console.log(cidade)
         if(cidade == 'Sao Paulo'){
                window.location.href = "sp.html";
            }
        })
    })
