 
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


// //se crea un "prototipo base"
//  const studentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedCourses: undefined,
//     learningPaths: undefined,
//     socialMedia:{
//         twitter: undefined,
//         instagram: undefined,
//         facebook: undefined,
//     }
//  };
  
// esta funcion sirve para poder decir a una variale 
// que es obligatorio
function requiredParam(param){
    throw new Error(param + " este parametro es obligatorio!!");
}

function createStudent({
    name = requiredParam("name"),
    age,
    email =requiredParam("email"),
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}){//= {} esto se agrega cuando decimos que el objeto por defecto es vacio
    return{
        name,
        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },      
    };
}

//probar en la consola
const juan = createStudent({
     name: "juanito",
    // age: 20,
     email: "juani@juanito.com",
    // twitter: "juaniTwiter"
})
