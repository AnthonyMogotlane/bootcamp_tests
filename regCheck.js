const regCheck = (regNumber, regIndicator) => {
    return (regIndicator === "GP" || "MP" || "EC" || "L") ? regNumber.includes(regIndicator): false;
}