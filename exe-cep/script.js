// //------ http://viacep.com.br/
// ---- Pegando o elemento #CEP HTML -------
const cep = document.getElementById('cep');
// escrevendo no console o valor do CEP 
console.log(cep.value);

cep.addEventListener('focusout', () => {
    console.log('Focus Out')

    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        // fetch('http://viacep.com.br/ws/' + cep.value + '/json/')
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            //---- Pode usar os dados da API -----
            const estado = document.getElementById('estado');
            estado.value = data.uf;
            //---- pode ser utilizado sem criação de variável/constante = document.getElementById('estado').value = data.uf;

            const cidade = document.getElementById('cidade');
            cidade.value = data.localidade;

            const bairro = document.getElementById('bairro');
            bairro.value = data.bairro;

            const endereco = document.getElementById('endereco');
            endereco.value = data.logradouro;

            console.log(data);
        })

        .catch((erro) => {
            console.log(erro)
        })
})