const regCheck = (regNumber, regIndicator) => {
    if(regIndicator === "GP" || "MP" || "EC" || "L") {
        if(regNumber.endsWith(regIndicator)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}