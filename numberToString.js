//9.number to string
const numInWords=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let str="";
let num=78;
let numArray=[];
for(let i=0; i<num.toString().length; i++){
    numArray.push(parseInt(num.toString()[i]));
}
for(let j=0; j<numArray.length; j++){
    str+=numInWords[numArray[j]];
}
console.log(str);