/*

for (let i =0 ; i < 10; i++){
    let idTimeOut = setTimeout(function() {
        console.log('10 Holas retardados a 5 segs')}, 5000)
}
// Ese delay solo es para el setitimeout, no para el for 


let timeOutByeInstant = setTimeout(function() {
    console.log('Adios instantaneo')
},0)


let idInterval = setInterval(function () {
    console.log('Holas seguidos intervalos')
}, 5000)

let idInterval2 = setInterval(function () {
    console.log('Adios seguidos intervalos')
}, 5000)


setTimeout(function () {
    clearInterval(idInterval) // Esto solo admite un parametro
    clearInterval(idInterval2)
}, 25000)



let box = document.getElementById('boxPrueba')

let boxTop = 0 // Para la posicion desde arriba

setInterval(() => {
    boxTop = boxTop + 5
    //box.style.height = boxTop + 'px' // Px para darle las unidades
    //box.style.width = boxTop + 'px' // Px para darle las unidades
}, 100);

*/