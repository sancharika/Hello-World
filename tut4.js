//function and scoope
const mg=function greet(name,thank='thank you'){
    // console.log(`Hi ${name}
    //             ${thank}`);
    msg=`yoo ${name} and ${thank}`
    return msg;
}
let n='sancharika';
//  greet(n,'Thanks');
let z=mg(n,'thenks')//greet(n);
console.log(z)

const myobj={
    name:'sanch',
    os: function o(nam){
        return `${nam}`;
    }
}
console.log(myobj.os(window));

//var function level scope
//let/ const block level

let i=234;

function ui(name){
    var i=4;
    console.log(i);
    return `${name}`;
    
}
console.log(ui('sanc'),i);