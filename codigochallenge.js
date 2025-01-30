// crear una lista para almacenar los nombres de los amigos

let listaDeAmigos = [];
let amigosSorteados = [];
let amigosdisponibles = [];


function agregarAmigo(){
    let ingresarAmigos = document.getElementById('amigo').value.trim();
    // verifico si el nombre ingresado ya existe en mi lista de amigos previamente ingresados
    if (listaDeAmigos.includes(ingresarAmigos)){
        alert('el nombre ya existe, intente ingresar otro nombre');
    }
    // valido si no se ingresa nada y se da click en añadir, envia un mensaje
    else if (ingresarAmigos == ""){
        alert('Por favor, inserte un nombre')
    }else {
        // incorpora a la lista de amigos, lo ingresado en la web
        listaDeAmigos.push(ingresarAmigos);
        limpiarNombreAmigo();
        mostrarListaAmigos();
        console.log(listaDeAmigos);
    }           
}

//  se utiliza para limpiar el nombre ingresado en la web, cada vez que se da click en añadir
function limpiarNombreAmigo(){
    document.querySelector('#amigo').value = '';
}

function mostrarListaAmigos(){
    //Obtener el elemento ul
    let lista = document.getElementById('listaAmigos');
    //lo que hace, es que el nombre que ingresaron previamente, no se repita en la lista, junto con el nuevo
    // nombre ingresado
    lista.innerHTML = '';
    // Recorrer la lista de amigos y agregar cada uno a la lista
    listaDeAmigos.forEach((amigo) => {
        //Crear un elemento li
        let li = document.createElement('li');
        //Agregar el nombre del amigo al li
        li.textContent = amigo;
        //Agregar el li a la lista
        lista.appendChild(li);
    });
    
}


function sortearAmigo(){
    //  se enlasa con el index "resultado" para dejar el comentario del nombre dle amigo que te saldra sorteado
    // let resultado = document.getElementById("resultado");
    // condicion para validar la cantidad de amigos necesarios para realizar el sorteo y dejar el 
    // mensaje en la pantalla
    if (amigosdisponibles.length == listaDeAmigos.length){
        alert("Ya no hay mas amigos para sortear, reinicie para ingresar nuevos amigos");
    //  no es necesario dejar la condicion de || listaDeAmigos % 2 sea siempre par
    } else if (listaDeAmigos.length === 0 || listaDeAmigos.length <2){
        alert('Debe ingresar mas amigos para realizar el sorteo');
        // este codigo de abajo permite dejar un mensaje abajo de la lista creada, pero no puedo 
        // hacerlo desaparecer despues de que ingresan mas nombres

        // resultado.innerHTML= 'Debe ingresar mas amigos para realizar el sorteo';
        // resultado.className = 'result-list-error';

        return;

    //  luego de verificar si existen amigos suficiente para el sorteo, se realiza el sorteo
    }else {
    let indicedeListaAmigos = Math.floor(Math.random()*listaDeAmigos.length);
    amigosSorteados = listaDeAmigos[indicedeListaAmigos]; // se accede a la lista de amigos con el indice
        // Se verifica si cada amigo elegido se encuentra en la lista de sorteados para no repetir nombres
        if (amigosdisponibles.includes(amigosSorteados)){
        // si el nombre esta en la lista creada, se vuelve al inicio de la función para sortear un numbre
        return sortearAmigo();
        //  si no es un nombre repetido, lo agrega a la lista para no repetir
        }else {
        amigosdisponibles.push(amigosSorteados);
        // se deja el mensaje de cual es el nombre de la persona a la cual debes hacer el regalo
        resultado.innerHTML= `Eres el amigo secreto de ${amigosSorteados}`;
        resultado.className = 'result-list';

        // son para verificar el funcionamiento del npombre sorteado y la creación de la lista 
        // usada para no repetir
        console.log(amigosSorteados);
        console.log(amigosdisponibles);
        return indicedeListaAmigos

        }
    
    }
}



