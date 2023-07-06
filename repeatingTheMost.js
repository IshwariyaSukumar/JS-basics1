//4.Find the characters that are repeating the most simaltaneously
let str="traiiiiiiiiiiining";
console.log(findRepeat(str));

function findRepeat(str){
let strMap=new Map();
let ans="";
let count=0;
for(let i=0; i<str.length; i++){
    strMap.set(str[i],(strMap.get(str[i]) || 0)+1);
    if(count<strMap.get(str[i])){
        count=strMap.get(str[i]);
        ans=str[i];
    }
}
return ans;
}