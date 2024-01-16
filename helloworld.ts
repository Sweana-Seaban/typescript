// let message:string = "hello";
// console.log(message)

// const user={
//     name:'serwer',
//     age:34
// }

// console.log(user.name)


//variables
let vVariable:string = 'variable'
const vConstant:string = 'constant'
console.log(vVariable)
console.log(vConstant)


//functions
const sum = (a:number,b:number) : number => a+b

console.log(sum(5,7))


//union
let error : string | null = null //error variable can be string or null


//interface

interface animalInterface{
    family:string
    foodType:boolean
}

class Tiger implements animalInterface {
    family="cat";
    foodType=true;
}

//type aliases
type ID=string
type popularTag=String
const popularTags:popularTag[]=['sds','dasda']


//any
let vAny:any='fdf'

