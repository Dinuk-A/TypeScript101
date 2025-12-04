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

let an1 = { name: "cow", legs: 4 };
let an2 = { name: "parrot", legs: 2, wings: 2 }

//types in arrays ✅
//just use [] after the array's type
let petTypes: string[] = ["cat", "dog"];
let nums: number[] = [123, 45, 645, 1, 2]

let animals: Animal[] = [
    { name: "cat", legs: 4 },
    { name: "bat", legs: 4, wings: 2 }
]

//this is also correct ✅
let alsoAnimals: Animal[] = [an1, an2]

//this is also correct ✅
let alsoAnimals2: Array<Animal> = [
    { name: "cat", legs: 4 },
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

//type narrowing ✅
type empCode = string | number;  //can be string or number
let empId: empCode = 12345;
let empId2: empCode = "A1234";
//this is useful with keyword 'typeof' to check the type at runtime

//function return types ✅
type User = { username: string, role: UserRole }

let users: User[] = [
    { username: "cat", role: "admin" },
    { username: "rat", role: "moderator" }
]

//ex, this functions return value must be a type of User, cant be like > foundUser.username...etc
function fetchUserData(givenUN: string): User {
    let foundUser = users.find(u => u.username === givenUN);
    if (!foundUser) {
        throw new Error("given user not found")
    }
    return foundUser;
}

//any type ✅
let notGoodWay: any = 55;
notGoodWay = "now a string"
//similar as turning off typescript for that variable, not recommended

//void return type ✅
function logMessage(msg: string): void {
    console.log("Log msg: " + msg);
    //no return value
}

// Utility types ✅
// they take other types as a parameter and return a new type, with some changes made to it
// goal is to perform commonly needed modifications to existing TS types
// use "Generics" syntax with '<>'s
// many utility types > Partial, Required, Omit, Pick, Record, etc

// Partial Utility type ✅
// one of many utility types
// modifies the existing types by turning all of their properties into optional ones
type Human = {
    name: string,
    age: number
}

type Ghost = Partial<Human>

//  Omit type ✅
// takes in a type AND a string (or a union of strings) of property names and return a -
// - new type with those properties removed
type HumanWithoutAge = Omit<Human, "age">;
let hwa: HumanWithoutAge = { name: "Alice" };

