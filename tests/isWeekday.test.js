describe("isWeekday", function() {
    it("Monday is a day in the week.", function() {
        assert.deepEqual(isWeekday("Monday"), true);
    })

    it("Friday is a day in the week.", function() {
        assert.deepEqual(isWeekday("Friday"), true);
    })
})