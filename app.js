/* seleccionamos los elementos del dom que vamos a necesitar (CATCH THE DOM) */

/* asociamos el input */
const input = document.getElementById('ingresar-tarea');

/* asociamos boton */
const boton = document.querySelector('button');

/* asociamos al div lista-de-tareas que está vacío en el html */
const listaDeTareas = document.getElementById('lista-de-tareas');

/* necesitamos ahora, definir que va a ocurrir cuando se agrega una tarea */
/* que pas cuando se marca una tarea como completada */
/* y cuando se elimina una tarea */
/* entonces necesitamos tres funciones que luego vamos a asociar al boton y al input, tambien un evento 
en que el usuario pueda presionar enter luego de ingresar la tarea y que eso sea equivalente a dar click en el boton */

function agregarTarea() {
 /* lo primero es chequear si el input tiene ingrasada informacion o si está vacio */

    /* si el usuario ingresó un string esto devuelve "true" */
    if (input.value) {

        //crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        /* texto ingrasado por el usuario */
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        /* crear y agregar contenedor de iconos */
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        /* iconos */
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        /* append nos permite ingresar mas de un elemento */
        /* ingresamos aqui lo dos iconos al div "iconos" */
        iconos.append(completar, eliminar);


        /* agregar tarea a la lista */
        listaDeTareas.appendChild(tareaNueva);
    } else {
        alert('Ingresa una Tarea Por Favor');
    }
}



/* ahora necesitamos dos funciones, primero para activar el boton de tarea completada y para activar el boton de eliminar */
function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode; //toggle si tiene la clase, la elimina, si no la tiene, la agrega.
    tarea.classList.toggle('completada');
}


function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode; //toggle si tiene la clase, la elimina, si no la tiene, la agrega.
    tarea.remove();
}




/* cuando se hace clik al boton agrega tarea */
boton.addEventListener('click', agregarTarea);


/* para que el enter funcione como un click al boton */

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

