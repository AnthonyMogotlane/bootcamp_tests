const greet = firstName => {
    return (typeof firstName === "string") ? "Hello, " + firstName: "Please enter a valid name, not number";
}