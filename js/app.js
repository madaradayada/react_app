let num = 42
let firstName = 'Alex'
const isProgrammer = true

// Can do
/*let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Elena' //bad
let myNum = 34 //good
let num42 = 10
*/

// Restricted
/*let 42num = '11'
let my-num = 1
let const
*/

// firstName = 'Max'
// isProgrammer = false // error because of  const 

// alert(firstName)
// console.log(firstName, num, isProgrammer)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)

let num2 = num + 10
console.log(num, num2)
num = num2 - num
num2 = num2 + 1
console.log(num, num2)

let num3 = (num + 10)