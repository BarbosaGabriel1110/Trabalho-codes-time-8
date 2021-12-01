document.addEventListener("DOMContentLoaded", function(){

    h3s = document.querySelectorAll('h3')
    continuar = h3s[0]

    opcoes = document.querySelectorAll('option')

    var select = document.getElementById('categorias');

    function myScript(){
        restaurante = select.value
    }

    select.addEventListener("change", myScript);

    continuar.addEventListener('click', function(event) {
            if(restaurante == 'japonesa'){
                window.location.href = "restaurante.html";
            }
            else if(restaurante == 'italiana'){
                window.location.href = "rest_italiano.html";      
            }
        })
    })