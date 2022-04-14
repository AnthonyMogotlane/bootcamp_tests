var isWeekday = weekday => {
    if(typeof(weekday) !== "string") return "The data type of the argument should be a string";
    return (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(weekday)) ? true: false;
} 