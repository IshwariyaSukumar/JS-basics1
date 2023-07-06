//10. check spaces
let str="check spaces";
console.log(checkSpace(str));
//let ans=false;

function checkSpace(str){
for(let i=0; i<str.length; i++){
    if(str.charAt(i)==" "){
       return true;
    }
}
return false;
}