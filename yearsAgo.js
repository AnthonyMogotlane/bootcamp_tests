var yearsAgo = year => {
    const date = new Date();
    const thisYear = date.getFullYear();
    if(year >= thisYear) return "Enter a year which is lessthan the current year";
    return thisYear - year;
} 

console.log(yearsAgo(2023));
// console.log(`The year ${year} entered is greater than the current year`);