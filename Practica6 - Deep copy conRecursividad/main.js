 
 const objt1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
    editA(){
        this.a = "AAAA";
    }
 }


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


 
 