describe("The yearsAgo function", function() {
    it("should return how many years ago it was from the current year", function() {
        assert.equal(yearsAgo(2000), 22);
    })

    it("should return how many years ago it was from the current year", function() {
        assert.deepEqual(yearsAgo(2010), 12);
    })

    it("should return 'input the year lessthan the current year' for a number input greaterthan the current year", function() {
        assert.deepEqual(yearsAgo(2023), "input the year lessthan the current year");
    })
})