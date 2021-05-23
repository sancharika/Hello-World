//array obj
const fruit=['orange','apple'];
let num=[1,3,5,34,78];
console.log(num);
console.log(num[3]);
console.log(Array.isArray('num'));
num[2]=`sanch`;
console.log(num);
let value= num.indexOf(34);
console.log(value);
num.push(3235);//at last
console.log(num);
num.unshift(100);//at first
console.log(num);
num.pop();//at last
console.log(num);
num.shift();//at first
console.log(num);
num.splice(1,3);
console.log(num);
num.reverse();
console.log(num);
num=num.concat(fruit);
console.log(num);

let myobj={
    name: `sancharika`,
    branch: `IT`,
    marks: [1,3,5,7,9]
}
console.log(myobj);
console.log(myobj.marks);
console.log(myobj[`branch`]);
