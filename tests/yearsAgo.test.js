describe("The yearsAgo function", function() {
    it("It should return 22 for the year 2000.", function() {
        assert.equal(yearsAgo(2000), 22);
    })

    it("It should return 12 for the year 2010.", function() {
        assert.deepEqual(yearsAgo(2010), 12);
    })

    it("It should return 'Enter a year which is lessthan the current year' for a year passed which is greaterthan the current year.", function() {
        assert.deepEqual(yearsAgo(2023), "Enter a year which is lessthan the current year");
    })
})