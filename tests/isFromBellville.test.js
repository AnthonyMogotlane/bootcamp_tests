describe("isFromBellville", function() {
    it("The registation number 'CY 595-444' is from Bellville.", function() {
        assert.deepEqual(isFromBellville("CY 595-444"), true);
    })

    it("The registation number 'CY 132-684' is from Bellville.", function() {
        assert.deepEqual(isFromBellville("CY 132-684"), true);
    })
})


