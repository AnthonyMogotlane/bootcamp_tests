describe("isFromBellville", function() {
    it("It should return 'true' for registration number 'CY 595-444' which is from Bellville.", function() {
        assert.deepEqual(isFromBellville("CY 595-444"), true);
    })

    it("It should return 'false' for registration number 'CA 132-684' which is from Cape Town.", function() {
        assert.deepEqual(isFromBellville("CA 132-684"), false);
    })

    it("It should return 'The registration number should be a string' if the passed argument is not a string.", function() {
        assert.deepEqual(isFromBellville(586-654), "The registration number should be a string");
    })
})


