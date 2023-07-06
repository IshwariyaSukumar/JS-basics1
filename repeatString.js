//7. repeat string
let str="name";
let x=5;
console.log(repeatString(str,x));

function repeatString(str,x){
    let i=0, j=str.length*x, k=0;
    let ans="";
    while(i<j){
        if(k>=str.length){
            k=0;
       ans+=str.charAt(k); 
        }
        else{
            ans+=str.charAt(k);
        }
        i++;
        k++;
    }
    return ans;
}