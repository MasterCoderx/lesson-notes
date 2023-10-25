// function sum(numberOne, numberTwo) {
//   return numberOne + numberTwo;
// }

// const six = 6;
// const five = sum(2, 3);

// const newValue = sum(7);

// function getGreeting() {
//   return 'hello';
// }

// const greeting = getGreeting();

// function getDivideByFunction(numberToDivideBy) {
//   return function getNumber(numberToDivide) {
//     return numberToDivide / numberToDivideBy;
//   }
// }

// const value = getDivideByFunction(5);

// console.log(typeof value === 'function'); // true
// console.log(value(10)); // 2


// function getDeltaFunction(baseArguments) {
//   return function(newArguments) {
//     const b = newArguments.b;
//     const a = newArguments.a ?? baseArguments.a;
//   }
// }

// const getDelta = getDeltaFunction({ a: 0, b: 2, c: 3 });
// // getDelta(); // -8
// // a = 1
// // b = 12
// // c = 3
// getDelta({ a: 15, b: 12 }); // 132
// getDelta({ a: 4, b: 10 }); // 52
// getDelta({ a: 4, b: 0 }); // -48

// // The nested function returns NaN if any of the arguments are missing
// getDeltaFunction({ a: 1, c: 3 })(); // NaN
// getDeltaFunction({ a: 1, c: 3 })({ b: 15 }); // 213

const array1 = [5, 12, 8, 130, 44];

// 5 > 10
// 12 > 10
// 8 > 10
// 130 > 10
// 44 > 10

const found = array1.find(function predicate(element) {
    const result = element > 10;
    return result;
});

// console.log(found);
// Expected output: 12


// write findUserWithFullName  using the find function

const usersArray = [
    {
        firstName: 'John',
        lastName: 'Smith',
        heightInCm: 184
    },
    {
        firstName: 'Kate',
        lastName: 'Adams',
        heightInCm: 171
    },
    {
        firstName: 'Kate',
        lastName: 'Williams',
        heightInCm: 169
    }
];

const someUser = {
    firstName: 'John',
    lastName: 'Smith',
    heightInCm: 184
};
console.log(someUser.lastName)

/*
1. write findUserWithFullName function that returns undefined
2. function takes array as first argument
3. function takes fullName as second argument
3. function must call find
4. function must return user


5. with given fullName

*/


function findUserWithFullName(usersArray, desiredFullName) {
    const user = usersArray.find(function(userObject) {
        const firstName = userObject.firstName;
        const lastName = userObject.lastName;
        const fullName = firstName + ' ' + lastName;
        return desiredFullName === fullName;
    });

    return user;
}


const kate = findUserWithFullName(usersArray, 'Kate Williams');

console.log(kate.heightInCm); // 169