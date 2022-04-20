var countAllPaarl = function(regNumbers) {
    if(regNumbers.length === 0) return "no registration numbers";
    var regNumList = regNumbers.split(",");
    var paarlRegNum = [];
    
    for(var i = 0; i < regNumList.length; i++) {
      var regNum = regNumList[i].trim();
      
      if(regNum.startsWith("CJ")){
         paarlRegNum.push(regNum);
      }
    }
    
    var numOfReg = paarlRegNum.length;
    return numOfReg;
}