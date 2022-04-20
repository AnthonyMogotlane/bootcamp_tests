describe("The isWeekday function", function() {
    it("should return true if the input is a day in a week", function() {
        assert.deepEqual(isWeekday("Monday"), true);
    })

    it("should return true if the input is a day in a week", function() {
        assert.deepEqual(isWeekday("Friday"), true);
    })

    it("should return false if the input is a day on a weekend", () => {
        assert.deepEqual(isWeekday("Saturday"), false);
    })

    it("should return 'invalid input' if the input is not a string", () => {
        assert.deepEqual(isWeekday(5), "invalid input");
    })
})