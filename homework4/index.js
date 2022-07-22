/**
 * 
 *  Array –
 *  1.Find array of Odd/Even/Numbers divisible by 4 
 * 2. Caluculate Sum of all Odd/Even/Numbers divisible by 4
 * 3. Find Unique Numbers in the Array 
 * 4. Transform Array to print the type of elements in the Array  getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”] 
 * 5. Destructure Array  From the given array, build an object that has array elements as  properties. The name of the property is <typeof the element>+index destructureArray([50,”apple”,{a:1}])=>        {number0:50,string1:”apple”,object2:{a:1}}  
 * 6.  Find Index of first odd number - (using array method and also not using array methods) 
 * 7. Convert string to array and array to string. don’t  use split() and toString() 
 */

// 1.Find array of Odd/Even/Numbers divisible by 4
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

function findOddEven(arr) {
    let odd = [];
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (arr[i] % 4 === 0) {
                if (arr[i] % 2 === 0) {
                    even.push(arr[i]);
                }
                else {
                    odd.push(arr[i]);
                }
            }
            
        } 
        
    }
    return {
        odd:odd,
        even:even
    }
}

const result = findOddEven(arr);
console.log('1. Odd: ' + result.odd);
console.log('1. Even:' + result.even);

// 2. Caluculate Sum of all Odd/Even/Numbers divisible by 4
function sumOddEven(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (arr[i] % 4 === 0) {
                sum += arr[i];
            }
        }
    }
    return sum;
}

console.log('2. Sum of all Odd/Even/Numbers divisible by 4: ' + sumOddEven(arr));

// 3. Find Unique Numbers in the Array
function unique(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

const arr2 = [1,1,2,3,4,4,5,6,6,6,6]
const uniqueArr = unique(arr2);
console.log('3. Unique Numbers in the Array: ' + uniqueArr);

// 4. Transform Array to print the type of elements in the Array  getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”]

function getTypes(arr) {
    let types = [];
    for (let i = 0; i < arr.length; i++) {
        types.push(typeof arr[i]);
    }
    return types;
}

console.log('4. Types of elements in the Array: ' + getTypes([50,"apple",{a:1}]));

// 5. Destructure Array  From the given array, build an object that has array elements as  properties. The name of the property is <typeof the element>+index

const arr3 = [50, "apple", {a:1}];

function destructureArray(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[i] = typeof arr[i];
    }
    return obj;
}

const obj = destructureArray(arr3);
console.log('5. Destructure Array: ');
console.log(obj);

// 6. Find Index of first odd number - (using array method and also not using array methods)
function findIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return i;
        }
    }
}

console.log('6a. Index of first odd number: ' + findIndex(arr));
console.log('6b. Index of first odd number: ' + arr.indexOf(arr.find(x => x % 2 !== 0)));

// 7. Convert string to array and array to string. don’t  use split() and toString()
function stringToArray(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    return arr;
}

function arrayToString(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}

const array4 = stringToArray('Hello World');
console.log('7a. String to Array: ' + array4);
console.log('7b. Array to String: ' + arrayToString(array4));


