function checkTitle(text){
  
    let words=text.split(" ");
    
    for (let word of words){
    if(word.charAt(0) !== word.charAt(0).toUpperCase()){
        return false
    }
}
return true;


}
console.log(checkTitle("A Mind Boggling Achievement"))
console.log(checkTitle("Water is transparent"))