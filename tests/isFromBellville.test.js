describe("isFromBellville function", function() {
    it("The registation number \"CY 59444\" is from Bellville", function() {
        assert.equal(isFromBellville("CY 59444"), true);
    })

    it("The registation number \"CY 54886\" is from Bellville", function() {
        assert.equal(isFromBellville("CY 54886"), true);
    })
})