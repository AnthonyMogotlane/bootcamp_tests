var countRegNumber = function(regNumbers) {
    if(typeof(regNumbers) !== "string") return "invalid data input";
    return regNumbers.split(",").map(regNum => regNum).length;
    
}

// var countRegNumber = function(regNumbers) {
//     var listOfRegNum = regNumbers.split(",");
//     var regCount = listOfRegNum.length;
//     return regCount;
// }