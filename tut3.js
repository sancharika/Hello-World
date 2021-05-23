//If else for while
let age =28;
let vari;
let drive=false;
if(age==18){
    console.log('age');
}
else if( age === '24'){//==/!= for value check
                    //====/!== for value + datatype check
    console.log(age + '=');
}
else {
    console.log('not '+age);

}
if(typeof vari !== undefined){ 
    console.log('vari not defined');
}
else{
    console.log('vari defined');

}
if( drive || age>18 && vari !=undefined ){ // &&-> and ||->or
    console.log('drive true');
}
else{
    console.log('drive false ');

}
console.log(age==18? 'age less than 18' : 'age greater than 18');

// first condition then if true ... else
switch (age) {
    case 18:
        console.log('age 18  ');
        break;
    case 28:
        console.log('age 28  ');
        break;
    case 38:
        console.log('age 38  ');
        break;

    default:
        console.log('age   ');
        break;
}

let i=0;
do{
    //console.log(i);
    if (i==4) {
        i++;
        continue;
    }
    console.log(i);
    i++;

}while(i<10)//first run the loop then check
//break loop close
// continue skip that iteration
console.log('array loop');
let arr=[2,3,4,5,6,8,9];
// for (let j = 0; j < arr.length; j++) {
//     const element = arr[j];
//     console.log(element);
// }
arr.forEach(function(element,index,array) {
    console.log(element,index,array);
});

let obj={
    name:'sancharika',
    class:'IT',
    programm:'JS code',
    age:19
}
for (let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}