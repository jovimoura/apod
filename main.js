let data = document.getElementById('data');
let botao = document.getElementById('botao');

let corpo = document.body;

let container = document.getElementById('container');

const video = document.createElement('iframe');

botao.addEventListener('click',()=>{
    let url = `https://api.nasa.gov/planetary/apod?api_key=akNSApe5z5RNVz55fbkAyeTb5OgRw2Q7vx8kcgfm&date=${data.value}`

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
            
            const caixaVideo = document.createElement('div');
            caixaVideo.setAttribute('id','box-video');
            container.append(caixaVideo);

            const texto = document.createElement('h3');
            texto.setAttribute('id','titulo');
            texto.textContent = 'Vídeo';
            caixaVideo.append(texto);

            caixaVideo.append(video);
            video.setAttribute('id','iframe');

            caixaVideo.style.display = 'flex';
            caixaVideo.style.flexDirection = 'column'
            caixaVideo.style.textAlign = 'center'

            video.src = conversao.url;
            video.style.display = 'block';
            
        }

    });

    xhr.send();
});