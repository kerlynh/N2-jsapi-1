// const corpo = document.getElementsByTa('body');
// const raiz = document.createElement('div');
// raiz.setAttribute('id', 'root');

// corpo.appendChild(raiz);

const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'authors');

const h1 = document.createElement('h1');
h1.textContent = 'Colaboradores';



app.appendChild(h1)
app.appendChild(container);



const request = new XMLHttpRequest();

request.open('GET', 'https://randomuser.me/api/?results=10', true);

request.onload = function() {
    const data = JSON.parse(this.response); //--->alterar o tipo string para objeto<-----
    console.log(data.results[0]);

    if(request.status >= 200 && request.status < 400) {
        console.log('Sucesso!!!');
        
        data.results.forEach(people => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
        
            const image = document.createElement('img');
            image.src = people.picture.large;

            const h2 = document.createElement('h2');
            h2.textContent =`${people.name.first} ${people.name.last}`;

            const h3 = document.createElement('h3');
            h3.textContent = `${people.location.state}, ${people.nat}`;
        
            const p = document.createElement('p');
            p.textContent = people.email;
        
            const p2 = document.createElement('p');
            p2.textContent = people.cell;

            container.appendChild(card);
            card.appendChild(image)
            card.appendChild(h2);
            card.appendChild(h3)
            card.appendChild(p)
            card.appendChild(p2);
        });

    } else {
        console.log('erro :c');
    }
};
request.send()