let x=8;
let y=3;
let sum=0;
console.log(sumOfMultiple(x,y,sum));


function sumOfMultiple(x,y,sum){
    for(let i=1; i<=y; i++){
       sum+=i*x;
    }
    return sum;
}