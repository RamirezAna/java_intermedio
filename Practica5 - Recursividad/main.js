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



////RECURSIVA

// function recursiva(params) {
//     if(/*validacion */){
//     // nuestros llamados recursivos
//     }else{
//     // llamados normales, sin recursividad    
//     }
// }


/*iterar normal*/
// const numeritos = [0,1,2,5,6,5,4,2,9,10];
// let numerito =0;
// for(let index=0; index < numeritos.length; index++){
//     numerito=numeritos[index];
//     console.log({index, numerito});
// }


/*Iterar con recursividad */
const numeritos = [0,1,2,5,6,5,4,2,9,10];

function recursiva(numbersArray){
    if(numbersArray.length != 0){//recorre mientras tenga algun valor
        const firstNum = numbersArray[0];//agarramos el primer valor
        console.log(firstNum)//imprimimos el primer valor
       
        numbersArray.shift(); //elimina el primer index
        recursiva(numbersArray) //vuelve a llamar a la funcion recursiva
    } 
}

recursiva(numeritos); //llamar a la funcion


 