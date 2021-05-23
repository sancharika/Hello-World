//variables,conversion
console.log("tut.js invoked");
var a=3;
a+=4;
console.log(a);
a-=5;
console.log(a);
a*=2;
console.log(a);
a/=2;
console.log(a);
var char="I am \"Sancharika\"";
var char=`I am "Sancharika"`;
var char1='I am "Sancharika"';
console.log(char);
console.log(char1);
var str="First line ";
var str1= "Second line ";
str += str1;
console.log(str);

var leng;
var name='sancharika debnath';
leng= name.length;
console.log(name +" "+leng);

var letter="";
var lett='hello';
letter=lett[2+2];
console.log(letter);

var lastLetter;
var lastLett="ab hsbakbakj hdabcdf";
lastLetter=lastLett[lastLett.length-1];
console.log(lastLetter)

let arr=[1,3,5,7,9];
arr.pop(2);
console.log(arr);
// let sym={@};

let marks={
    abc:14,
    def:7

}
console.log(marks);
let date = new Date('2020-02-01');
console.log(date);

let convertNumber;
convertNumber= String(34);
console.log(convertNumber , (typeof convertNumber));
let convertNumber1;
convertNumber1= 34;
console.log(convertNumber1.toString() , (typeof convertNumber1));

let stri=Number('33626');
console.log(stri);
let strin=parseInt('33.626');
console.log(strin);
let strin1=parseFloat('33.626');
console.log(strin1.toFixed(4));
let stri1=Number(true);
console.log(stri1);

let n=Number('34');
let n1=32;
console.log(n+n1);
let n2='674';
let n3=32;
console.log(n2*n3);