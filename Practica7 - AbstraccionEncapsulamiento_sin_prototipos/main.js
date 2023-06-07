 
 function isObject(subject){
    return typeof subject == "object"; //para saber si el valor que pasamos es un objeto
 }
 
 function isArray(subject){
    return Array.isArray(subject);//para saber si el valor de pasamos es un Array.
 }

 function deepCopy(subject){
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if(subjectIsArray){
        copySubject = [];
    }else 
    if(subjectIsObject){
        copySubject = {};
    }else{
        return subject;
    }

    //recursividad
    for(key in subject){
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key]);
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key])
            }
            else{
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
 }


//se crea un "prototipo base"
 const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia:{
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    }
 };
 
const juan = deepCopy(studentBase);

// evitar borrar la propiedad name de juan, se puede modificar pero no eliminar
// Object.defineProperty(juan, "name", {
//     value: "Juanito",
//     configurable: false,
// });


//ninguna propiedad del objeto juan se podra eliminar con el seal.
Object.seal(juan);

// es para preguntar si el objeto juan tiene todas sus propiedades
//protegidas con seal.
Object.isSealed(juan);

//determina si un objeto está congelado o no
//no podra editar ni eliminar 
Object.isFrozen(juan);


