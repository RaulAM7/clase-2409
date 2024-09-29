/* MANAGING TIME

*/

/* SETTIMEOUT
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1, param2,  … , paramN)
*/

/* SETINTERVAL

*/


// Ejemplo de TimeOut


const names = ['Raul', 'Marta',"pepe","antonio","hola","juanito"] 

function sayHello(name){
  console.log('Buenos días: ' + name)
}


const saludoTimeOut = setTimeout(function(name){
    sayHello(name)
    console.log('ESTO ES UN TIMEOUT TRAVIESO')
}, 2000, 'Raúl')


const saludoInterval = setInterval(function(name){
    sayHello(name)
},200, names)



const clearAll = setTimeout(function(){
    clearInterval(saludoInterval)
    console.log('Interval cleared')
    clearTimeout(saludoTimeOut)
}, 2000)