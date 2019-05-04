//------ http://viacep.com.br/

fetch('http://viacep.com.br/ws/01001000/json/')
// fetch('http://viacep.com.br/ws/' + this.cep + '/json/')
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log("SUCESSO!!")
    console.log(data)

    data.forEach(CEP =>{
        const local = document.querySelector('input')
        const estado = document.getElementById('estado');
        estado.value = CEP.CEP;


       
    })
})

.catch(function(erro){
    console.log(erro)
})