 const objt1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    }
 }

 //JSON.stringify => convierte objeto a String
const objt2 = JSON.stringify(objt1);
//JSON.parse => creamos un objeto a partir de un String
const objt3 = JSON.parse(objt2);
console.log(objt3);



 