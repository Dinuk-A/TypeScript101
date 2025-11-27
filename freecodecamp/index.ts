//primitive types in TS ✅
let myName: string = "John Doe";
let age: number = 27;
let isStudent: boolean = true;
//other primitive types are null and undefined

//defining a new custom types ✅
// use type keyword, name of type should start with capital letter
//1
type Food = string;
let favFood: Food = "Pizza";

//2 Object types, can use comma,: or without any thing ✅
type Person = {

    name: string,
    age: number,
    isStudent: boolean

    //nested object types ex 1 ✅
    address: {
        street: string,
        city: string,
        postalCode: number
    }
}

//exsmple
let p1: Person = {
    name: "dinuka",
    age: 27,
    isStudent: true,
    address: {
        street: "123 Main St",
        city: "Colombo",
        postalCode: 10000
    }
}

//nested object types ex 2 ✅
type MainChar = {
    name: string,
    born: number
}

type Movie = {
    name: string,
    year: number,
    mainCharacter: MainChar
}

// optional properties for types, use optional chaining (?) ✅
type Animal = {
    name: string
    legs: number
    wings?: number
}

let an1 = {name:"cow",legs:4};
let an2 = {name:"parrot",legs:2,wings:2}

//types in arrays ✅
//just use [] after the array's type
let petTypes: string[] = ["cat", "dog"];
let nums: number[] = [123, 45, 645, 1, 2]

let animals: Animal[] = [
    { name: "cat", legs: 4},
    { name: "bat", legs: 4, wings: 2 }
]

//this is also correct ✅
let alsoAnimals: Animal[] = [an1,an2]

//this is also correct ✅
let alsoAnimals2 : Array<Animal> =  [
    { name: "cat", legs: 4},
    { name: "bat", legs: 4, wings: 2 }
]

console.log(alsoAnimals[1].name);

//literal types ✅
let name2 = "bob";   //when hover over this is from the type string
const myname3 = "bob";  //this' type is shown as bob, the actual value type, because usage of const

//same can be done with var and lets too
let myName4: "bob" = "bob";   //now this MUST have a value of "bob", cant even change the case(Bob)

//unions ✅
type UserRole = "guest" | "admin" | "moderator";  //can only have one of these 3 values
let userRole: UserRole = "admin";   //this never can be any other value except these 3