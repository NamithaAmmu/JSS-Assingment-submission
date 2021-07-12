let str="madam";
let rev_str=str.split("").reverse().join("");
var check = str === rev_str? "This String Is Palindrome" : "This String Is Not Palindrome";
console.log(check);