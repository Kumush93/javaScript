function findMax(arr) {
    if (arr.length === 0) {
        return -1; 
    }
    return Math.max(...arr); 
}


function largestEven(arr){
    let maxEven=[]
    for (let i=1; i<arr.length; i++){
        if(arr[i]%2==0){
            maxEven.push(arr[i])
        }
        
    }
    return findMax(maxEven)

}
console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13])) // 10
console.log(largestEven([1, 3, 5, 7])) // -1