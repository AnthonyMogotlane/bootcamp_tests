describe("The isFromBellville function", function() {
    it("should return true if the registration number is from Bellville", function() {
        assert.deepEqual(isFromBellville("CY 595-444"), true);
    })

    it("should return false if the registration number is not from Bellville", function() {
        assert.deepEqual(isFromBellville("CA 132-684"), false);
    })

    it("should return 'invalid input' if the input is not a string", function() {
        assert.deepEqual(isFromBellville(586-654), "invalid input");
    })
})


