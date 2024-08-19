console.log('Saludos desde terminal')

// var, let, const
var a = 10
var a = '10 '

let b = 11
// let b = '11'  no puedo redefinir

const PI = 3.1416
//PI = 3.1417

console.log("🚀 ~ concatenar =>" , a + b)

/*
let nombre = prompt('Cual es tu nombre?')
console.log("🚀 ~ nombre:", nombre)
console.log("🚀 ~ typeof:", typeof nombre)

let edad = prompt('Cual es tu edad?')
console.log("🚀 ~ nombre:", parseInt(edad))
console.log("🚀 ~ typeof:", typeof parseInt(edad))
*/

console.log("🚀 ~ document:", document)
console.log("🚀 ~ head:", document.head)
console.log("🚀 ~ body:", document.body)
console.log("🚀 ~ title:", document.title)
console.log("🚀 ~ domain:", document.domain)

document.title = 'Cambiado desde JS'

/*
getElemetById('titulo')
getElemetByClassName('miClase')
getElementByTabName('etiqueta')
getElementByTabName('div')

querySelector(selector) '#id'
querySelector(selector) '.clase'
querySelector(selector) 'div'

querySelectorAll(selector)

createElement('elemento')
createDocumentFragment('')
*/

document.addEventListener('DOMContentLoaded'), () => {
    console.log('@@@ dom=> carga todo')
    console.log(document.querySelector('h1'))
}

