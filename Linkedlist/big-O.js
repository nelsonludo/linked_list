function detArray(n){
    let sum = 0;
    for (i=0;i<n.length;i++){
        sum += n[i];
    }
    return sum;
}

console.log(detArray([1,15]));