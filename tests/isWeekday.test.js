describe("The isWeekday function", function() {
    it("It should return true for Monday.", function() {
        assert.deepEqual(isWeekday("Monday"), true);
    })

    it("It should return true for Friday.", function() {
        assert.deepEqual(isWeekday("Friday"), true);
    })

    it("It should return false for Saturday.", () => {
        assert.deepEqual(isWeekday("Saturday"), false);
    })

    it("It should return 'invalid input' if the input is not a string.", () => {
        assert.deepEqual(isWeekday(5), "invalid input");
    })
})