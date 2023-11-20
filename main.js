document.addEventListener('DOMContentLoaded', () => {
   
    const theme = document.getElementById('button-theme');

    //Tema dark y light
    theme.addEventListener('click', () => {
        if (document.body.className === 'dark-theme') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');

            //Cambiando de botón
            theme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>`

            //Guardando en localStorage
            localStorage.setItem('dark', 'false');
            localStorage.setItem('sun', 'false');
        } else if (document.body.className === 'light-theme') {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');

            //Cambiando de botón
            theme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                <path fill="#FFF" fill-rule="evenodd"
                d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" />
                </svg>`

            //Guardando en localStorage
            localStorage.setItem('dark', 'true');
            localStorage.setItem('sun', 'true');
        }
    })

    //Obteniendo el modo actual
    if (localStorage.getItem('dark') === 'true') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }

    if (localStorage.getItem('sun') === 'true') {
        theme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                <path fill="#FFF" fill-rule="evenodd"
                d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" />
                </svg>`
    } else {
        theme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>`
    }

})

//Variables
const buttonPlus = document.getElementById('plus');
const inputText = document.querySelector('.input-text');
const contenedor = document.querySelector('.container__things');
const buttonClear = document.querySelector('.paragraph-clear');
const buttonActive = document.querySelector('.paragraph-active');

let numero = document.querySelector('.paragraph-number');
let lista = {}

//Contadores
let contador = 0;

//Botón para añadir tareas
buttonPlus.addEventListener('click', () => {

    if (inputText.value.trim() === '') {
        return;
    }

    const tarea = {
        id: Date.now(),
        texto: inputText.value
    }

    lista[tarea.id] = tarea;
    inputText.value = ''
    inputText.focus();

    //Funcion para pintar tareas
    pintarTareas()

    //Sumar numero de tareas
    contador++;
    numero.textContent = contador
})

const pintarTareas = () => {
    contenedor.innerHTML = '';

    Object.values(lista).forEach(tarea => {
        
        contenedor.innerHTML += `
            <li class="thing container__input" id=${tarea.id}>
                    <div class="input-check check" onclick="check(${tarea.id})">
                    </div>
                    <p class="thing-paragraph">${tarea.texto}</p>
                    <svg class="cross" xmlns="http://www.w3.org/2000/svg" width="18" height="18" onclick="cross(${tarea.id})">
                    <path fill="#494C6B" fill-rule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
                    </svg>
            </li>
        `;
        
    })

}

//Tachar tarea
const check = id => {
    const parrafo = document.getElementById(id).querySelector('.thing-paragraph');
    
    parrafo.classList.toggle('tachado');
}

//Borrar tarea
const cross = id => {
    delete lista[id]
    contador--;
    numero.textContent = contador
    pintarTareas()
}

//Boton para limpiar todas las tareas
buttonClear.addEventListener('click', () => {
    lista = {};
    numero.textContent = 0;
    pintarTareas();
})

//Boton para tareas activas
buttonActive.addEventListener('click', () => {
    console.log('ya funciona');
})
