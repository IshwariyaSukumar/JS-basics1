//3.filter invalid items
const arr=["name", "id", 34, "board"];
let type="string";
console.log(filterArray(arr,type));

function filterArray(arr,type){
    const res=[];
    for(let i=0; i<arr.length; i++){
        let elementType=typeof arr[i]
        if(elementType!=type){
            res.push(arr[i]);
        }
    }
    return res;
}