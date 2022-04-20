var yearsAgo = year => {
    const date = new Date();
    const thisYear = date.getFullYear();
    if(year >= thisYear) return "input the year lessthan the current year";
    return thisYear - year;
} 

// console.log(`The year ${year} entered is greater than the current year`);