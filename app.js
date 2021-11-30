const URL = "https://dog.ceo/api/breeds/image/random"

const MAIN = document.querySelector(".main")
const CONTENEDOR_IMAGENES = document.querySelector(".imagenes")
const CAMPO = document.querySelector(".campo")
let INPUT = document.querySelector(".campos")
const BOTON_UNO = document.querySelector(".uno")
const BOTON_TRES = document.querySelector(".tres")
const BOTON_NUEVE = document.querySelector(".nueve")
const BOTON_DOCE = document.querySelector(".doce")

function generarUnaImagen(character){
    BOTON_UNO.addEventListener('click', ()=>{
        CONTENEDOR_IMAGENES.innerHTML=''
        const IMAGEN = document.createElement('img')
        IMAGEN.setAttribute('src', character.message)
        IMAGEN.setAttribute('class', "imagen")

        CONTENEDOR_IMAGENES.appendChild(IMAGEN)
        MAIN.appendChild(CONTENEDOR_IMAGENES)
    })
}

function generarTresImagenes(character){
    BOTON_TRES.addEventListener('click', ()=>{
        CONTENEDOR_IMAGENES.innerHTML=''
        for(let i = 0; i<3; i++) {
            const IMAGEN = document.createElement('img')
            IMAGEN.setAttribute('src', character.message)
            IMAGEN.setAttribute('class', "imagen")

            CONTENEDOR_IMAGENES.appendChild(IMAGEN)
        }
        MAIN.appendChild(CONTENEDOR_IMAGENES)
    })

}

function generarNueveImagenes(character){
    BOTON_NUEVE.addEventListener('click', function(){
        CONTENEDOR_IMAGENES.innerHTML=''
        for(let i = 0; i<9; i++) {
            const IMAGEN = document.createElement('img')
            IMAGEN.setAttribute('src', character.message)
            IMAGEN.setAttribute('class', "imagen")

            CONTENEDOR_IMAGENES.appendChild(IMAGEN)
            MAIN.appendChild(CONTENEDOR_IMAGENES)
        }
    })
}

function generarDoceImagenes(character){
    BOTON_DOCE.addEventListener('click', ()=>{
        CONTENEDOR_IMAGENES.innerHTML=''
        for(let i = 0; i<12; i++) {
            const IMAGEN = document.createElement('img')
            IMAGEN.setAttribute('src', character.message)
            IMAGEN.setAttribute('class', "imagen")

            CONTENEDOR_IMAGENES.appendChild(IMAGEN)
            MAIN.appendChild(CONTENEDOR_IMAGENES)
        }
    })
}

function generarImagenesN(character){
    CONTENEDOR_IMAGENES.innerHTML=''
    INPUT.addEventListener('keyup', function(){
        if(this.value > 0 || this.value < 9){
            CONTENEDOR_IMAGENES.innerHTML=''
            for(let i = 0; i<this.value; i++) {
                const IMAGEN = document.createElement('img')
                IMAGEN.setAttribute('src', character.message)
                IMAGEN.setAttribute('class', "imagen")
    
                CONTENEDOR_IMAGENES.appendChild(IMAGEN)
                MAIN.appendChild(CONTENEDOR_IMAGENES)
            }
        }
        else{
        }
    })
}

function fetchApi() {
    fetch(URL).then(respuesta => respuesta.json()).then(elementos => {
        generarUnaImagen(elementos)
        generarTresImagenes(elementos)
        generarNueveImagenes(elementos)
        generarDoceImagenes(elementos)
        generarImagenesN(elementos)
    })
}

fetchApi()