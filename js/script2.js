//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100
let personas= []
function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")
    let eEdad = document.getElementById("edad")
    let vEdad = eEdad.value
    let eErrorEdad = document.getElementById("errorEdad")
    let fNombre = validarLargoMinimo(eNombre, vNombre, eErrorNombre)
    let fEdad = validarEdad (eEdad, vEdad, eErrorEdad)
    if (fNombre == "exito" && fEdad == "exito"){
        let p = {
            nombre: vNombre,
            edad: vEdad
        }
        personas.push(p)
        eNombre.value = ""
        eEdad.value = ""
        cargarDatos()
    }   
}

function validarLargoMinimo(elemento, valor, eError){
    if(valor.length < 3){
        eError.innerHTML = "Debe ingresar un minimo de 3 caracteres"
        alert("Debe ingresar un minimo de 3 caracteres")
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    }else {
        eError.innerTEXT = ""
        elemento.style.backgroundColor = "green"
        elemento.style.colo = "white"
        return "exito"
    }
}

function validarEdad(elemento, valor, eError){
    if(valor.number <= 17 && valor.number >= 100){
        eError.innerHTML = "Debe ingresar una edad valida"
        alert("Debe ingresar una edad valida")
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    }else {
        eError.innerTEXT = ""
        elemento.style.backgroundColor = "green"
        elemento.style.colo = "white"
        return "exito"
    }
}

function cargarDatos(){
    let mapPersonas = personas.map((p, index) => {
        return "<tr><td>"+p.nombre+
                "</td><td>"+p.edad+
                "</td><td><button type = 'button' value = '"+index+"' onclick = 'eliminar("+index+")'>Eliminar</button>"+
                "<button oclick = 'actualizarFormulario("+index+")'>Actualizar</button></td></tr>"
    })
    let tablaPersonas = document.getElementById("cuerpoTabla")
    let strTablaPersonas = mapPersonas.join("")
    tablaPersonas.innerHTML = strTablaPersonas
    console.log("se ingresaron los datos")
}

function eliminar(indice){
    personas = personas.filter((p, index) => {
        if(index != indice){
            return p
        }
    })
    cargarDatos()
}

function actualizarFormulario(indice){
    let eNombre = document.getElementById("nombre1")
    let eEdad = document.getElementById("edad1")
    let persona = personas.filter((p,index) => {
        if(index == indice){
            return p
        }
    })
    eNombre.value = persona[0].nombre
    eEdad.value = persona[0].edad
    btnActualizar.value = indice
}

function actualizar(){
    let eNombre = document.getElementById("nombre1")
    let vNombre = eNombre.value
    let eEdad = document.getElementById("edad1")
    let vEdad = eEdad.value
    let btnActualizar = document.getElementById("btnActualizar")
    let indice = btnActualizar.value
    personas = personas.map((p, index) =>{
        if (index == indice){
            return{
                nombre: vNombre,
                edad: vEdad
            }
        }else{
            return p
        }
    })
    cargarDatos()
}