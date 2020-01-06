//VARIABLE 
//keywords : let, var, and const

//3.const keyword (ES6)

const pi= 3.14;         //one time declaration
console.log(pi);//3.14
pi=4.11;          // ERROR: Assignment to constant variable



console.log(pi); //throws exception(cannot access 'pi' before initialization)
const pi= 3.14;


//note : ES6 is able read  code of lines ahead of current line.
//therefore; will give error "cannot access before initialization" instead of "undefined"