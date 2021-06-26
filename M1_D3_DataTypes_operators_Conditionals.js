/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20.
*/

function ex1(){
    return 12+20
 }
 console.log(ex1())
 /* EXERCISE 2
 Create a variable named x containing the number 12. Then, UNCOMMENT the "return x" line.
 */
 let y=12
 function ex2(){
     return y 
 }
 console.log(ex2())
 //
 /* EXERCISE 3
 Create a variable named name containing the string John Doe Then, UNCOMMENT the "return name" line.
 */
 let Name='Jhon Doe'
 function ex3(){
   return Name
 }
 console.log(ex3())
 /* EXERCISE 4
 Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
 Then, UNCOMMENT the commented out lines.
 */
 let number=12
 let x=12
 function ex4(){
 
   let result = number-x 
   return result
 }
 console.log(ex4())
 /* EXERCISE 5
 Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
 Create a boolean variable "result1" that is true when name1 is equal to name2
 Create a boolean variable "result2", that is true when name1 lowercased and name2 lowercased are equal (without changing the value of name2).
 
 Eventually, return both result1 and result2, i.e. UNCOMMENT the commented out lines.
 */
 let name1='john'
 let name2='John'
 
 function ex5(){
 
    let result1 = name1===name2
    let result2 = name1.toLowerCase()===name2.toLowerCase()
    return {
     result1, result2
    }
 }
 console.log(ex5())


/* EXERCISE 6
Write the code to print the literal value of a number x: its value must be less than 10. (ex.: if x is 1 print "one", if 5 print "five" etc.).
Then, UNCOMMENT the commented out lines.
*/

function ex6(z){
    if(z>10){
      if(z=1){
       let numberAsString='One'
      }
      if(z=2){
        let numberAsString='Two'
      }
      if(z=3){
        let numberAsString='Three'
      }
      if(z=4){
        let numberAsString='Four'
      }
      if(z=5){
        let numberAsString='Five'
      }
      if(z=6){
        numberAsString='Six'
      }
      if(z=7){
        let numberAsString='Seven'
      }
      if(z=8){
        let numberAsString='Eight'
      }
      if(z=9){
        numberAsString='Nine'
      }
    }
   
  return numberAsString
}

console.log(ex6(2)) // expected: "two"

/* EXERCISE 7
Return the largest between two numbers a and b using a ternary operator.
Then, UNCOMMENT the commented out lines.
*/

function ex7(a, b){
  const largest = a<b ? b:a

   return largest
}

console.log(ex7(10, 20)) // expected: 20


module.exports = {
  ex1,ex2,ex3,ex4,ex5,ex6,ex7
}