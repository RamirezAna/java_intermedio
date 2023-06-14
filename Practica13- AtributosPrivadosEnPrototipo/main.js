
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

 
/*metodo statico */

 
function SuperObject() {}
SuperObject.isObject = function(subject) {
    return typeof subject == "object"; //para saber si el valor que pasamos es un objeto
}
SuperObject.deepCopy = function(subject) {
    return typeof subject == "object"; //para saber si el valor que pasamos es un objeto
 
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


function requiredParam(param) {
    throw new Error(param + " este parametro es obligatorio!!");
}

 

//funcion
function createLearningPaths({
    name = requiredParam("name"),
    courses = [],
}){
    this.name = name;
    this.courses = courses;         
}

function Student({
    name = requiredParam("name"),
    age,
    email = requiredParam("email"),
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {//= {} esto se agrega cuando decimos que el objeto por defecto es vacio
    this.name = name;
    this.age = age;
    this.email = email;
    this.learningPaths = learningPaths;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    }; 

    const private = {
        "_learningPaths": [],
    };

    Object.defineProperty(this, "learningPaths", {
        get(){
            return private["_learningPaths"];
        },
        set(newLp){
                if(newLp instanceof learningPath){
                    private["_learningPaths"].push(newLp);
                }else{
                    console.warn("Alguno de los LP no es un instancia de learnigPath");
                }
            }, 
        },
    );

        for(learningPathIndex in learningPaths){
            this.learningPaths = learningPaths[learningPathIndex];
        }      
   
}



const escuelaweb = new learningPaths({name: "Escuela de WebDev"});
const escuelaData = new learningPaths({name: "Escuela de Data"});

//probar en la consola
const juan = new Student({
    name: "juanito", 
    email: "juani@juanito.com", 
    learningPaths: [
        escuelaweb,
        escuelaData,
    ]
})

