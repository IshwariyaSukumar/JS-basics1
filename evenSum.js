const num=[38, 3, 2, 8, 31];
let sum=0;
for(let i=0; i<num.length; i++){
    if(num[i]%2==0){
        sum=sum+num[i];
    }
}
console.log(sum);