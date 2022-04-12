describe("yearsAgo", function() {
    it("Is 22 years ago since 2000.", function() {
        assert.equal(yearsAgo(2000), 22);
    })

    it("Is 12 years ago since 2010.", function() {
        assert.deepEqual(yearsAgo(2010), 12);
    })
})