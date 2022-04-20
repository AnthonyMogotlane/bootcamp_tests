describe("The countRegNumber function", function() {
    it("should return how many registration numbers are in the input string, in this case is 3", function() {
        assert.deepEqual(countRegNumber("CA 182-736,CY 523-519,CJ 812-328"), 3);
    })

    it("should return how many registration numbers are in the input string, in this case is 1", function() {
        assert.deepEqual(countRegNumber("CA 182-736"), 1);
    })

    it("should return 'invalid data input' if the input is not a string", () => {
        assert.deepEqual(countRegNumber(854), "invalid data input");
    })
})
  