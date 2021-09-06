let data = document.getElementById('data');
let botao = document.getElementById('botao');

let corpo = document.body;

const video = document.getElementById('iframe');


botao.addEventListener('click',()=>{
    let url = `https://api.nasa.gov/planetary/apod?api_key=akNSApe5z5RNVz55fbkAyeTb5OgRw2Q7vx8kcgfm&date=${data.value}`

    console.log('botao funciona');
    let xhr = new XMLHttpRequest();

    xhr.open('GET',url);

    xhr.addEventListener('load', ()=>{
        let resposta = xhr.responseText;
        let conversao = JSON.parse(resposta);

        let imagem = conversao.url;
        

        if(conversao.media_type === 'image'){
            video.style.display = 'none';
            corpo.style.backgroundImage = `url(${imagem})`;
        }else{
            
            video.src = conversao.url;
            video.style.display = 'block';
            
        }

        
        //console.log(conversao);
        //console.log(typeof conversao);
    });

    

    xhr.send();
});