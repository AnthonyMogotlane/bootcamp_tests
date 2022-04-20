var countAllFromTown = function(regNumbers, startReg) {
    if(!(regNumbers.startsWith(startReg))) return 0;
    var regNumList = regNumbers.split(",");

    var townRegNum = [];

    for(var i = 0; i < regNumList.length; i++) {
        var regNum = regNumList[i].trim();
        
        if(regNum.startsWith(startReg)) {
        townRegNum.push(regNum);
        }
    }

    var numOfReg = townRegNum.length;
    return numOfReg;
}