const html = document.querySelector('html');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/luna-rise-part-one.mp3');

musica.loop = true

inputEnfoqueMusica.addEventListener('change', ()=> {
        if(musica.paused){
            musica.play()
        }else{
            musica.pause()
        }

})

botonEnfoque.addEventListener('click', () => {
    CambiarContexto('enfoque')
    botonEnfoque.classList.add('active')

});

botonCorto.addEventListener('click', () => {
    CambiarContexto('descanso-corto')
    botonCorto.classList.add('active')
});

botonLargo.addEventListener('click', () => {
    CambiarContexto('descanso-largo')
    botonLargo.classList.add('active')
});


function CambiarContexto(contexto){

    botones.forEach(function(contexto){
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto',contexto)
    banner.setAttribute('src', `./imagenes/${contexto}.png`)

    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = `
            ¿Que tal tomar un respiro?,<br>
                <strong class="app__title-strong">¡Haz una pausa corta!</strong>
            `
            break;
        case "descanso-corto":
            titulo.innerHTML = `
            Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `
            break;
            
        case "descanso-largo":
            titulo.innerHTML = `
            Hora de volver a la superficie,<br>
                <strong class="app__title-strong">haz una pausa larga.</strong>
                `           
    
        default:
            break;
    }
}
    

