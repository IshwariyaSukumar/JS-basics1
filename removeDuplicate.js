//8. duplicate
let chars=['b', 'a', 'h', 't','a', 'h'];
let res=[];
for(let i=0; i<chars.length; i++){
    let j=chars.lastIndexOf(chars[i]);
    if(j==i){
        res.push(chars[i]);
    }
}
console.log(res);