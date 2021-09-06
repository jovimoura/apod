let data = document.getElementById('data');
let botao = document.getElementById('botao');

let corpo = document.body;


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
            corpo.style.backgroundImage = `url(${imagem})`
        }else {
            const video = document.createElement('iframe');
            video.classList.add('video');
            video.allowFullscreen = true;
            video.src = conversao.url;
            corpo.appendChild(video);
            
        }

        
        //console.log(conversao);
        //console.log(typeof conversao);
    });

    

    xhr.send();
});