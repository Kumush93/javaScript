function largestEven(arr){
    let maxEven=-1
    for (let num of arr){
        if (num%2==0 &&  num>maxEven){
                maxEven=num;
        }
    }
    return maxEven
}


console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13])) // 10