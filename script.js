'use strict'

// ========== banco de dados ==========
const dados = [
    {
        "id": '1',
        "name": 'Deamon Souls',
        "playTime": '16,1',
        "achievement": '40',
        "imagem": '1.jpg',
        "wallpaper": '1.jpg',
    },
    
    {
        "id": '2',
        "name": 'Elden Ring',
        "playTime": '152,9',
        "achievement": '34',
        "imagem": '2.jpg',
        "wallpaper": '2.jpg',
    },
    
    {
        "id": '3',
        "name": 'resident evil village',
        "playTime": '3,6',
        "achievement": '50%',
        "imagem": '3.jpg',
        "wallpaper": '3.jpg',
    },
    
    {
        "id": '4',
        "name": 'days gone',
        "playTime": '7,2',
        "achievement": '55',
        "imagem": '4.jpg',
        "wallpaper": '4.jpg',
    },
    
    {
        "id": '5',
        "name": 'need for speed',
        "playTime": '65,8',
        "achievement": '100',
        "imagem": '5.jpg',
        "wallpaper": '5.jpg',
    },
    
    {
        "id": '6',
        "name": 'mortal kombat 11',
        "playTime": '4,1',
        "achievement": '70',
        "imagem": '6.jpg',
        "wallpaper": '6.jpg',
    },

    {
        "id": '7',
        "name": 'uncharted 4',
        "playTime": '10,7',
        "achievement": '90',
        "imagem": '7.jpg',
        "wallpaper": '7.jpg',
    },

    {
        "id": '8',
        "name": 'horizon forbidden west',
        "playTime": '12,4',
        "achievement": '36',
        "imagem": '8.jpg',
        "wallpaper": '8.jpg',
    },

    {
        "id": '9',
        "name": 'far cry 5',
        "playTime": '2,6',
        "achievement": '8',
        "imagem": '9.jpg',
        "wallpaper": '9.jpg',
    },

    {
        "id": '10',
        "name": 'guardian of the galaxy',
        "playTime": '0,5',
        "achievement": '2',
        "imagem": '10.jpg',
        "wallpaper": '10.jpg',
    },

    {
        "id": '11',
        "name": 'spider-man miles morales',
        "playTime": '25',
        "achievement": '98%',
        "imagem": '11.jpg',
        "wallpaper": '11.jpg',
    },

];

document.getElementById('contDados').innerHTML = dados.length;

// ========== ========== 
const wallpaper = document.getElementById('wallpaper');
const containerCard = document.getElementById('containerCards');

const createCards = (dados) => {
    for(let i = 0; i <= dados.length -1; i++){
        containerCard.innerHTML +=`
            <div class="card desSelected" id='${i}'>
                <img src="img/capa/${dados[i].imagem}"/>
            </div>
        `;
    }
}

const card = () => {
    document.querySelectorAll('#containerCards div').forEach(item => {
        
        item.onclick = () =>{
            document.getElementById('wallpaper').src = 'img/wallpaper/' + dados[item.id].wallpaper
            document.getElementById('nameGame').innerHTML = dados[item.id].name
            document.getElementById('hours').innerHTML = dados[item.id].playTime + ' Hours'
            document.getElementById('achievement').innerHTML = dados[item.id].achievement + "%"
            
            let allBox = document.querySelectorAll(".card");
                for (let index = 0; index < allBox.length; index++) {
                allBox[index].classList.remove('selected')
                allBox[index].classList.add('desSelected')
            }

            item.classList.remove('desSelected')
            item.classList.add('selected')
        }
    })
}

createCards(dados);
card()
document.getElementById("0").classList.remove('desSelected')
document.getElementById("0").classList.add('selected')
document.getElementById('wallpaper').src = 'img/wallpaper/' + dados[0].wallpaper
document.getElementById('nameGame').innerHTML = dados[0].name
document.getElementById('hours').innerHTML = dados[0].playTime + ' Hours'
document.getElementById('achievement').innerHTML = dados[0].achievement + "%"












































