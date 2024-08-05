//assignment 
//question no1

function reverseArray(array) {
    return array.reverse();
}


let array = [1, 2, 3, 4, 5];


console.log(reverseArray(array)); // Output: [5, 4, 3, 2, 1]


function newArray(array) {
    return array.reverse();
}
let largestArray = [1, 2, 3, 4, 5, 6, 7, 8];


console.log(newArray(largestArray)); // Output: [8, 7, 6, 5, 4, 3, 2, 1]



//question no3
function vowels(str){
    str=str.toLowerCase()
    let vowel =" a i e o u";
  
    let count = 0;
   
   
    for (let char of str){
       if (vowel.includes(char)){
           count++;
       }
}
return count;
 }
let string ="Hello world!"
console.log(vowels(string));


//Question no4
function isPalindrome(str) {
  
    str = str.toLowerCase();

    
    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}
console.log(isPalindrome("mom"));
console.log(isPalindrome("hello"));


//question n06

let name = "Rija";
let slices = name.slice(1,4);
console.log(slices);