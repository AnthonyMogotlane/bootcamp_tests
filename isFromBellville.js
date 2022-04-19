function isFromBellville(regNumber) {
    if(typeof(regNumber) !== "string") return "The registration number should be a string";
    return regNumber.startsWith("CY");
}