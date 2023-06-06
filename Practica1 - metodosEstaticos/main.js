const juan ={
    name: 'Juanito',
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};

// juan.addCourse("Curso 2");
// console.log("approvedCourses "+ juan.approvedCourses);

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));


Object.seal(juan);// tiene la configurable en false
Object.freeze(juan);//tiene la configurable y writable en false

Object.defineProperty(juan, "navigator",{
    value: "Chrome",
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(juan, "editor",{
    value: "VScode",
    writable: false,
    enumerable: true,
    configurable: true,
});
Object.defineProperty(juan, "terminal",{
    value: "WSL",
    writable: true,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(juan, "pruebaNasa",{
    value: "extraterrestre",
    writable: false,
    enumerable: false,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(juan));
