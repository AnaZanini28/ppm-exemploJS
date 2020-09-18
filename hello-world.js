var campoNome = document.getElementById('campoNome');
var btnOk = document.getElementById('btnOk');
       btnOk.onclick = helloWorld;

        var btnLimpar = document.getElementById('btnLimpar');
        btnLimpar.addEventListener('click', limpar);

       function helloWorld(){
            
            var nome = campoNome.value.trim();
            var menssagem = 'Hello World ' + nome + '!';
            document.getElementById('menssagemHelloWorld');
            menssagemHelloWorld.innerText = menssagem;
       } 
       
       function limpar(){
            var nome = campoNome.value.trim();
            document.getElementById('menssagemHelloWorld');
            menssagemHelloWorld.innerText = '';
       }