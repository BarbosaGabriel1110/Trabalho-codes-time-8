document.addEventListener("DOMContentLoaded", function(){

    continuar = document.querySelector('h3')

    opcoes = document.querySelectorAll('option')

    console.log(opcoes)

    var select = document.getElementById('cidades');

    function myScript(){
        city = select.value
    }

    select.addEventListener("change", myScript);

    continuar.addEventListener('click', function(event) {
            if(city == 'São Paulo'){
                window.location.href = "sp.html";
            }
            else if(city == 'Escolha'){
                window.location.href = "rest_italiano.html";      
            }
        })
    })
