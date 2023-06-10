
function isObject(subject) {
    return typeof subject == "object"; //para saber si el valor que pasamos es un objeto
}

function isArray(subject) {
    return Array.isArray(subject);//para saber si el valor de pasamos es un Array.
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else
        if (subjectIsObject) {
            copySubject = {};
        } else {
            return subject;
        }

    //recursividad
    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key])
            }
            else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

 

// esta funcion sirve para poder decir a una variale 
// que es obligatorio
function requiredParam(param) {
    throw new Error(param + " este parametro es obligatorio!!");
}


//funcion
function createLearningPaths({
    name = requiredParam("name"),
    courses = [],
}){
    const private ={
        "_name": name,
        "_courses": courses,
    };

    const public ={
        get name(){
            return private["_name"];
         },
 
         set name(newName){
             if(newName.length != 0){
                 private["_name"] = newName; 
             }else{
                 console.warn("name no es valido");
             }
         },

         get courses(){
            return private["_courses"];
         },  
    };

    return public;
}

function createStudent({
    name = requiredParam("name"),
    age,
    email = requiredParam("email"),
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {//= {} esto se agrega cuando decimos que el objeto por defecto es vacio

    //propiedades privadas
    const private = {
        "_name": name,
        "_learningPaths": learningPaths,

    };

    //propiedades publicas
    const public = {
        age,
        email,
        approvedCourses, 
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },

        get name(){
           return private["_name"];
        },

        set name(newName){
            if(newName.length != 0){
                private["_name"] = newName; 
            }else{
                console.warn("name no es valido");
            }
        },
        
        get learningPaths(){
            return private["_learningPaths"];
        },
 
        set learningPaths(newlearningPaths){
            if(!newlearningPaths.name){
                console.warn("LP no tiene nombre!!")
                return;
            }

            if (!newlearningPaths.courses){
                console.warn("LP no tiene courses!!")
                return;
            }

            if (!isArray(newlearningPaths.courses)){
                console.warn("LP no es una lista de Cursos!!")
                return;
            }

            private["_learningPaths"].push(newlearningPaths);                          
        }  
    };

      return public;
}

//probar en la consola
const juan = createStudent({
    name: "juanito",
    // age: 20,
    email: "juani@juanito.com",
    // twitter: "juaniTwiter"
})

