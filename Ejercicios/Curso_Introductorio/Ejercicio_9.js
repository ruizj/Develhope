const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

name == lastname                            //false
age <= average                              //true
firstYearCompleted == lastname              //false
yearsCompleted == firstYearCompleted        //false
firstYearCompleted === yearsCompleted       //false
examsCompleted < age                        //true
isGraduated > yearsCompleted                //false


console.log(name == lastname);
console.log(age <= average);
console.log(firstYearCompleted == lastname);
console.log(yearsCompleted == firstYearCompleted);
console.log(firstYearCompleted === yearsCompleted);
console.log(examsCompleted < age);
console.log(isGraduated > yearsCompleted);