 const objt1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    }
 }

const objt2 ={}
//1
for (prop in objt1){
    objt2[prop] = objt1[prop];
}

//2 assign => SE CREA UN OBJETO 3 CON {} VACIO Y COPIA DE OBJETO 1
const obj3 = Object.assign({}, objt1);
//3 create => EN ESTE CASO SE LE PASA DIRECTO EL OBJETO QUE QUEREMOS COPIAR, SE ENCUENTRA DENTRO DE PROTO
const obj4 = Object.create(objt1);

console.log(objt1);
console.log(objt2);


// Shallow Copy se refiere a la forma de crear un nuevo objeto
//  a partir de las propiedades de otro. Esta copia solo se hace 
//  a un nivel alto, no se hace con objetos dentro de objetos
//   (nested objects), lo que provoca que la modificación de una 
//   de sus propiedades, modifique el objeto principal.
