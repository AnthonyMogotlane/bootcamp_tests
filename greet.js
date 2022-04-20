const greet = firstName => {
    return (typeof firstName === "string") ? "Hello, " + firstName: "invalid input";
}