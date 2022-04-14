describe("isWeekday", function() {
    it("It should return true for Monday.", function() {
        assert.deepEqual(isWeekday("Monday"), true);
    })

    it("It should return true for Friday.", function() {
        assert.deepEqual(isWeekday("Friday"), true);
    })

    it("It should return false for Saturday.", () => {
        assert.deepEqual(isWeekday("Saturday"), false);
    })

    it("It should return 'The data type of the argument should be a string' if a number or object or boolean is passed.", () => {
        assert.deepEqual(isWeekday(5), "The data type of the argument should be a string");
    })

})