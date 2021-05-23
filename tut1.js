//Strings
let html=' <h1> Heading </h1> '+
            ' <p>Paragraph</p> ';
html = html.concat(' this',' is',' conacted ');
console.log(html);
console.log(html.indexOf('this'));
console.log(html.lastIndexOf('<'));
console.log(html.lastIndexOf('iwhi'));
console.log(html.charAt(4));
console.log(html.endsWith('conacted '));
console.log(html.endsWith('con'));
console.log(html.includes('con'));
console.log(html.substring(2,12));//starting index to n-1 index
console.log(html.substring(-12));//substring will return all data 
console.log(html.slice(-5));//- for counting from last
console.log(html.slice(0,5));//from starting index
console.log(html.split('<>'));
console.log(html.replace('<','('));//first ref


const name = 'sancharika';
const greet = 'morng';
let fruit1='apple';
let fruit2='orange';

let myHtml=` Hello ${name}
            <h1>heading</h1>
            <p>Paragragh</p>
            <p> You like ${fruit1} and ${fruit2}

`;
document.body.innerHTML = myHtml;