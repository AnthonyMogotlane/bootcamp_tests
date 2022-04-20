describe("The countRegNumber function", function() {
    it("It should return 3 registration numbers for string 'CA 182736,CY 523519,CJ 812328'.", function() {
        assert.deepEqual(countRegNumber("CA 182-736,CY 523-519,CJ 812-328"), 3);
    })

    it("It should return 1 registration number for string 'CA 182-736'.", function() {
        assert.deepEqual(countRegNumber("CA 182-736"), 1);
    })

    it("The function can only take a string with registration numbers seperated by a comma.", () => {
        assert.deepEqual(countRegNumber(854), "Please input a string with registration numbers seperated by comma");
    })
})
  