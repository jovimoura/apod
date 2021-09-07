let data = document.getElementById('data');
let botao = document.getElementById('botao');

let corpo = document.body;

let container = document.getElementById('container');

const video = document.createElement('iframe');

//const video = document.getElementById('iframe');

//const caixaVideo = document.getElementById('box-video');
//caixaVideo.classList.add('none');


botao.addEventListener('click',()=>{
    let url = `https://api.nasa.gov/planetary/apod?api_key=akNSApe5z5RNVz55fbkAyeTb5OgRw2Q7vx8kcgfm&date=${data.value}`

    let xhr = new XMLHttpRequest();

    xhr.open('GET',url);

    xhr.addEventListener('load', ()=>{
        let resposta = xhr.responseText;
        let conversao = JSON.parse(resposta);

        let imagem = conversao.url;
        

        if(conversao.media_type === 'image'){
            //caixaVideo.classList.add('none')
            video.style.display = 'none';
            corpo.style.backgroundImage = `url(${imagem})`;
        }else{
            
            const caixaVideo = document.createElement('div');
            caixaVideo.setAttribute('id','box-video');
            container.append(caixaVideo);

            caixaVideo.append(video);
            video.setAttribute('id','iframe');


            
            video.src = conversao.url;
            video.style.display = 'block';
            
        }

    });

    xhr.send();
});