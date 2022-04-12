describe("regCheck", function() {
    it("The registration number is correct.", function() {
        assert.deepEqual(regCheck("YH 45 HN GP", "GP"), true)
    })

    it("The registration number is correct.", function() {
        assert.deepEqual(regCheck("FHN 679 EC", "EC"), true)
    })

    it("The registration number is correct.", function() {
        assert.deepEqual(regCheck("COD 456 MP", "MP"), true)
    })

    it("The registration number is correct.", function() {
        assert.deepEqual(regCheck("EXP 491 L", "L"), true)
    })
})