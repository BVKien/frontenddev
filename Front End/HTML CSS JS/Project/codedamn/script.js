/*
- note: pass by value / pass by reference
*/
console.log("Hello World!")
document.write("Hellow World!")

/* Variables - differents?
- let: allows you to cahnge the value after initialize it
- const: not allows, it's fixed
*/
// const myFirstVariable = 250
// console.log(myFirstVariable)

// let mySecondVariable = 250
// console.log(mySecondVariable)
// mySecondVariable = 251
// console.log(mySecondVariable)

/* Datatype */
const myAge = 22 // int
const amIAbove18 = true // bool
const myName = "Kien" // string
const friends = [22, true, "Kien"] // object
// const
let someSpecialValue = null // undefined
const bigIntNumber = 1111111111111111111111111111111111n // big intn
console.log(friends[2])
console.log(bigIntNumber)
console.log(someSpecialValue)

/* Typeof */
const typeOfConst = (typeof friends)
console.log(typeOfConst)

/* Operators */
// frist way
console.log("===============")
const my3age = 22
const update3age = my3age + 1
console.log("update my3age = " + update3age)
console.log("update my3age with power pow(int,int(ex = 23^2))[**]= " + update3age ** 2)

const fAge = [20, 21, 22, 23, 14]
const sum = fAge[0] + fAge[1] + fAge[2] + fAge[3] + fAge[4]
console.log("Sum og Friends Age = " + sum)
const totalFriends = 5
console.log("Total of Friends = " + totalFriends)
const avarage = sum / totalFriends
console.log("Avarage Friends Age = " + avarage)
console.log("===============")

// second way 
// let: flexible
console.log("===============")
let my2Age = 21
my2Age++
console.log(my2Age)
console.log("===============")

/* Console log */
console.log("===============")
console.log("Hello World!")
console.log(myAge, 2, 3, "Kien dep trai")
console.log("===============" + '\n' + "new line: 123")

/* Function */
console.log("===============")
let my4age = 20
let sum2 = 200
let totalCount = 5
/*
function makeConsleLog() {
    console.log('want to work with us?')
    console.log(totalCount)
}
makeConsleLog()
*/

/*
function printAllVariable() {
    console.log('my 4 age = ', my4age)
    console.log('sum 2 = ', sum2)
    console.log('total count', totalCount)
}
console.log('print all variable')
printAllVariable() 
*/

/*
// new my4age
console.log('print all variable')
my4age = 30
printAllVariable()
*/

// pass value
/*function addAge() {
    my4age = my4age + 1;
}
addAge(5)
*/

/*
function addAge(incrementBy){
    my4age = my4age + incrementBy
}
// because let is flex so my4age just increase function after function 
addAge(5)
addAge(5)
*/

// incrementBy: tăng với (+)
// multiplyBy: nhân với (*)
function addAge(incrementBy, multiplyBy) {
    my4age = (my4age + incrementBy) * multiplyBy
}

addAge(10, 2)

console.log('my 4 age = ' + my4age)

console.log("===============")

/* return */
console.log("===============")
const my5age = 20
let sum3 = 200
let totalCount1 = 5

function addAge2(incrementBy, multiplyBy) {
    // after return no statement gets executed
    // can return all the type
    return (my5age + incrementBy) * multiplyBy
}

const myNewAge = addAge2(10, 2)
console.log(my5age, myNewAge)

console.log("===============")

/* If Else */
console.log("===============")
const my6age = 20
let sum4 = 200
let totalCount2 = 5

function shouldIGetALicense(age) {
    if (age > 18) {
        console.log('Above 18')
        return true
    }
    console.log('Below 18')
    return false
}

console.log(shouldIGetALicense(20))
console.log(shouldIGetALicense(15))

console.log("===============")

/* Logical Operators */
console.log("===============")
// if else nested 
function shouldIGetALicense2(age, bribe, whitelisted){
    if(!whitelisted){
        console.log('whitelisted = ' + whitelisted)
        console.log('you are banned')
        return
    }
 
    if(age>=18 && bribe>=100) {
        console.log('you above 18, you can go.')
        return
    } else if(age<18){
        console.log('you below 18, stay.')
        return
    } else if(bribe<100){
        console.log('bribe too less, stay.')
        return
    }
}

shouldIGetALicense2(18, 100, true)

console.log("===============")

/* Common Array Operations */
console.log("===============")
let myFriends = ['default-theLF']

function addMyFriends(friend){
    //myFriends.push(friend)
    myFriends.unshift(friend)
    console.log(myFriends)
}

addMyFriends('Kien')
addMyFriends('dep')
addMyFriends('trai')
console.log('myFriends length = ' + myFriends.length)
//myFriends[3] = undefined
//console.log(myFriends)

/* cau truc du lieu giai thuat + tree 
- push
- pop
*/
/*
myFriends.pop()
myFriends.pop()
console.log(myFriends)
*/

// modify
myFriends[2] = 'anh Kien dep zai'
console.log('The final Array', myFriends)
console.log("===============")

/* Loops */
console.log("===============")
// for 
for (let i = 0; i < 10; i++) {
    myFriends.push(i)
}
console.log(myFriends)
console.log("===============" )

/* Continue and Break */
console.log("===============")
let evenNumbers = []
let oddNumbers = []

for (let i = 0; i < 10; i++) {
    if(i % 2 === 0){
        evenNumbers.push(i)
    } else {
        oddNumbers.push(i)
    }
}

console.log('even numbers = ', evenNumbers)
console.log('odd numbers = ', oddNumbers)

console.log("===============")