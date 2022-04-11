var countAllFromTown = function(regNumbers, startReg) {
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