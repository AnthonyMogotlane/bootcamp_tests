function isFromBellville(regNumber) {
    if(typeof(regNumber) !== "string") return "invalid input";
    return regNumber.startsWith("CY");
}