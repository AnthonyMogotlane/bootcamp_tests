const greet = firstName => {
    return (typeof firstName === "string") ? "Hello, " + firstName: false;
}