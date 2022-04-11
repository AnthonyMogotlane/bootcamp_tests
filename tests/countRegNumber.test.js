describe("countRegNumber", function() {
    it("They are 3 registrations numbers", function() {
        assert.equal(countRegNumber("CA 182736,CY 523519,CJ 812328"), 3);
    })

    it("The is 1 registrations numbers", function() {
        assert.equal(countRegNumber("CA 182736"), 1);
    })
})
  