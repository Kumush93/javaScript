function doubleChar(word){
    let result=''
    for(let i=0; i<word.length; i++){
        result += word[i].repeat(2)
    }
    return result

}
console.log(doubleChar("String")) //"SSttrriinngg"