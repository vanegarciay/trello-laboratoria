function nuevaColumna(){
    var input = document.getElementById("anadirLista");
    input.classList.add("titulo_en_edicion");

    var section = document.getElementById("nuevaColumna");
    section.classList.add("nueva_columna_en_edicion");

    if(document.getElementById("guardar")==null) {
        var boton = document.createElement("button");
        var textoBoton = document.createTextNode("Guardar");
        boton.appendChild(textoBoton);
        boton.setAttribute("id", "guardar");
        var nuevaColumna = document.getElementById("nuevaColumna");
        nuevaColumna.appendChild(boton);
    }
    if(document.getElementById("cancelar")==null) {
        var button = document.createElement("button");
        button.setAttribute("id", "cancelar");
        var nuevaColumna = document.getElementById("nuevaColumna");
        nuevaColumna.appendChild(button);
    }
}

/*

function anadirLista(){
    var tarea = document.getElementById("anadirLista").value;
    document.getElementById("anadirLista").value= "";
}*/