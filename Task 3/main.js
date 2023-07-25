//1
let str1 = prompt("Enter a string");
alert(`The entered string contains ${countSpaces(str1)} spaces`);

//2
let str2 = prompt("Enter a string");
alert(`Capitalized string: ${capitalize(str2)}`);

//3
let str3 = prompt("Enter a string");
alert(`The string contains ${countWords(str3)} words`);

//4
let str4 = prompt("Enter a string");
alert(`The string is ${isPalindrome(str4) ? "" : "not "}a palindrome`);

//5
let str5 = prompt("Enter a string");
alert(`The abbrevation from the entered string: ${makeAbbreviation(str5)}`);

//1
function countSpaces(str) {
    return Array.from(str).reduce((spaces, symb) => symb === " " ? spaces + 1 : spaces, 0);
}

//2
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

//3
function countWords(str) {
    return str.split(" ").filter(word => word !== "").length;
}

//4
function isPalindrome(str) {
    return str === Array.from(str).reverse().join("");
}

//5
function makeAbbreviation(str) {
    const words = str.split(" ").filter(word => word !== "");

    return words.map(word => word[0].toUpperCase()).join("");
}