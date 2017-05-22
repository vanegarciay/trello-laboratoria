function editorNuevaColumna(){
    /* Añadimos estilos de columna en ediciòn */
    var div_columna_de_creacion = document.getElementById("columna_de_creacion");
    div_columna_de_creacion.classList.add("nueva_columna_en_edicion");
    /* Añadimos estilos de input de columna en ediciòn */
    var input_titulo_nueva_columna = document.getElementById("titulo_nueva_columna");
    input_titulo_nueva_columna.classList.add("titulo_nueva_columna_en_edicion");
    /* Añadir el botòn guardar */
    if(document.getElementById("guardar") == null) {
        var boton_guardar = document.createElement("button");
        var texto_boton_guardar = document.createTextNode("Guardar");
        boton_guardar.setAttribute("id", "guardar");
        boton_guardar.appendChild(texto_boton_guardar);
        div_columna_de_creacion.appendChild(boton_guardar);
    }
    /* Añadir el botòn cancelar */
    if(document.getElementById("cancelar") == null) {
        var boton_cancelar = document.createElement("button");
        var texto_boton_cancelar = document.createTextNode(".");
        boton_cancelar.setAttribute("id", "cancelar");
        boton_cancelar.appendChild(texto_boton_cancelar);
        div_columna_de_creacion.appendChild(boton_cancelar);
    }
    /* Detectar cuando se hace click en guardar */
    boton_guardar.addEventListener("click", function(){
        insertarNuevaColumna();
        resetearColumnaDeCreacion();
    });
    /* Detectar cuando se hace click en cancelar */
    boton_cancelar.addEventListener("click", function(){
        resetearColumnaDeCreacion();
    });
}

function insertarNuevaColumna() {
    /* Crear la columna */
    var section_tasksboard = document.getElementById("tasksBoard");
    var div_nueva_columna = document.createElement("div");
    div_nueva_columna.classList.add("columna");
    section_tasksboard.appendChild(div_nueva_columna);
    /* Añadir titulo */
    var cabecera_de_columna = document.createElement("h1");
    var texto_ingresado = document.getElementById("titulo_nueva_columna").value;
    var texto_cabecera_de_columna = document.createTextNode(texto_ingresado);
    cabecera_de_columna.appendChild(texto_cabecera_de_columna);
    div_nueva_columna.appendChild(cabecera_de_columna);
    /* Añadir input para tarjetas */
    var escribir_nueva_tarea = document.createElement("input");
    escribir_nueva_tarea.setAttribute("placeholder", "Añadir una tarjeta...");
    escribir_nueva_tarea.setAttribute("onclick", "editorNuevaTarjeta(this)");
    escribir_nueva_tarea.setAttribute("mouseout", "dejarEdicionNuevaTarjeta(this)");
    escribir_nueva_tarea.setAttribute("onkeypress", "detectarEnterEnNuevaTarjeta(event, this)");
    escribir_nueva_tarea.classList.add("add_tarjeta")
    div_nueva_columna.appendChild(escribir_nueva_tarea);
}

function resetearColumnaDeCreacion() {
    /* Restablecer el contenido de la columna de creaciòn */
    var columna_de_creacion = document.getElementById("columna_de_creacion");
    var input_inicial = '<input type="input" id="titulo_nueva_columna" placeholder="Añadir una lista..." onkeypress="detectarEnterEnTituloNuevaColumna(event)" onclick="editorNuevaColumna()">';
    columna_de_creacion.innerHTML = input_inicial;
    /* Quitamos los estilos de ediciòn */
    columna_de_creacion.classList.toggle("nueva_columna_en_edicion");
}

function detectarEnterEnTituloNuevaColumna(event) {
    /* Detectar si oprime tecla Enter */
    tecla = (document.all) ? event.keyCode : event.which;
    if(tecla == 13) {
        insertarNuevaColumna();
        resetearColumnaDeCreacion();
    }
}

function editorNuevaTarjeta(input_add_tarjeta) {
    input_add_tarjeta.classList.add("tarjeta_en_edicion");
    var columnaActiva = input_add_tarjeta.parentNode;

    if(document.getElementById("add") == null && document.getElementById("cancelar_tarjeta") == null) {
        var div_contenedor_editor_tarjeta = document.createElement("div");
    }

    if(document.getElementById("add") == null) {
        var boton_add = document.createElement("button");
        var texto_boton_add = document.createTextNode("Añadir");
        boton_add.setAttribute("id", "add");
        boton_add.appendChild(texto_boton_add);
        div_contenedor_editor_tarjeta.appendChild(boton_add);
    }

    if(document.getElementById("cancelar_tarjeta") == null) {
        var boton_cancelar_tarjeta = document.createElement("button");
        var texto_boton_cancelar_tarjeta = document.createTextNode(".");
        boton_cancelar_tarjeta.setAttribute("id", "cancelar_tarjeta");
        boton_cancelar_tarjeta.appendChild(texto_boton_cancelar_tarjeta);
        div_contenedor_editor_tarjeta.appendChild(boton_cancelar_tarjeta);
    }    
    
    if(document.getElementById("add") == null && document.getElementById("cancelar_tarjeta") == null) {
        columnaActiva.appendChild(div_contenedor_editor_tarjeta);
    }

    boton_add.addEventListener("click", function(){
        insertarNuevaTarjeta(input_add_tarjeta, columnaActiva);
        resetearCreadorDeTarjetas(input_add_tarjeta, div_contenedor_editor_tarjeta);
    });

    boton_cancelar_tarjeta.addEventListener("click", function(){
        resetearCreadorDeTarjetas(input_add_tarjeta, div_contenedor_editor_tarjeta);
    });
}

function insertarNuevaTarjeta(input, columnaActiva) {
    var div_tarjeta_nueva = document.createElement("div");
    var texto_tarjeta_nueva = document.createTextNode(input.value);
    div_tarjeta_nueva.classList.add("tarjeta");
    div_tarjeta_nueva.appendChild(texto_tarjeta_nueva);
    columnaActiva.insertBefore(div_tarjeta_nueva, input);
}

function resetearCreadorDeTarjetas(input, div_contenedor_editor_tarjeta) {
    div_contenedor_editor_tarjeta.parentNode.removeChild(div_contenedor_editor_tarjeta);
    input.value = "";
    dejarEdicionNuevaTarjeta(input);
    input.blur();
}

function detectarEnterEnNuevaTarjeta(event, input) {
    var div_contenedor_editor_tarjeta = document.getElementById("add").parentNode;
    /* Detectar si oprime tecla Enter */
    tecla = (document.all) ? event.keyCode : event.which;
    if(tecla == 13) {
        insertarNuevaTarjeta(input, input.parentNode);
        resetearCreadorDeTarjetas(input, div_contenedor_editor_tarjeta);
    }
}

function dejarEdicionNuevaTarjeta(input) {
    input.classList.toggle("tarjeta_en_edicion");
}

