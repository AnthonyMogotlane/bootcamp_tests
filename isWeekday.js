var isWeekday = weekday => {
    if(typeof(weekday) !== "string") return "invalid input";
    return (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(weekday)) ? true: false;
} 