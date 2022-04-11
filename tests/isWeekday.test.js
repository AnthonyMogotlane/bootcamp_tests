describe("isWeekday function", function() {
    it("Monday is a day in the week", function() {
        assert.equal(isWeekday("Monday"), true);
    })

    it("Friday is a day in the week", function() {
        assert.equal(isWeekday("Friday"), true);
    })
})