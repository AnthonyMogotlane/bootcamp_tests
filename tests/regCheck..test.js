describe("regCheck function", function() {
    it("The registration number is correct", function() {
        assert.equal(regCheck("YH 45 HN GP", "GP"), true)
    })

    it("The registration number is correct", function() {
        assert.equal(regCheck("FHN 679 EC", "EC"), true)
    })

    it("The registration number is correct", function() {
        assert.equal(regCheck("COD 456 MP", "MP"), true)
    })

    it("The registration number is correct", function() {
        assert.equal(regCheck("EXP 491 L", "L"), true)
    })
})