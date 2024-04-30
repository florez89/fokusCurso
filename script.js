const html = document.querySelector('html');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

botonEnfoque.addEventListener('click', () => {
    CambiarContexto('enfoque')

});

botonCorto.addEventListener('click', () => {
    CambiarContexto('descanso-corto')
});

botonLargo.addEventListener('click', () => {
    CambiarContexto('descanso-largo')
});


function CambiarContexto(contexto){
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
    

