var yearsAgo = year => {
    const date = new Date();
    return date.getFullYear() - year;
}

// var yearsAgo = function(year) {
//     const date = new Date();
//     var thisYear = date.getFullYear();

//     return thisYear - year;
// }