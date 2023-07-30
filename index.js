//Funciones
function hello(nombre){
    return 'Hola ' + nombre 
}

// console.log(hello('Daniel'))

function add(x=0, y=0){
    return x+y
}

// console.log(add(5,6))

// Objetos
let objeto = {
    nombre:'Daniel',
    appellido : 'Osorio',
    edad: 24,
    localidad: {
        pais: 'Colombia',
        departamento: 'Valle del cauca',
        ciudad: 'Palmira'
    }
}

// console.log(objeto)

// añadiendo datos a objetos
const producto = 'pc'
const precio = 2500

const nuevoProducto = {
    producto,
    precio
}

// console.log(nuevoProducto)

// manipulacion del DOM
const subtitulo = document.createElement('h3')
subtitulo.innerText = 'Daniel'

const boton = document.createElement('button')
boton.innerText = 'Enviar'

boton.addEventListener('click', function(){
    subtitulo.innerText = 'Oso'
    console.log('Haz dado click')
})

document.body.append(subtitulo)
document.body.append(boton)

const user = {
    name: 'Leonidas',
    age: 35
}

function printInfo({name}){
    return '<h3>Hola '+ name+'</h3>'
}

// document.body.innerHTML = printInfo(user)

//Funciones anonimas
const btn = document.createElement('button')
btn.innerText = 'click me'

btn.addEventListener('click', function(){
    alert('clicked')
})

document.body.append(btn)

// funciones de flecha

const suma = (a,b) => {
    return a+b
}

const showText = () => 'Funcion flecha en la misma linea'
const showNum = () => 11
const showObject= () => ({name:'Daniel'})

//Arreglos

const names = ['daniel','isabella','plubio']
const nombres = ['marco','polo','mario']

//  metodo map
const newNames = names.map(function (name){
    return `Hola ${name}`
})

console.log(names)
console.log(newNames)

//metodo find

const nameFound = names.find(function(name){
    return name === 'daniel' ? name : 'No existe'
})

console.log(nameFound)

//metodo filter

const nameFilter = names.filter(function (name){
    if(name == 'isabella'){
        return name
    }
})

console.log(nameFilter)

// metodo concat

console.log(names.concat(nombres))

//optional chaining

console.log(objeto.location?.ciudad)