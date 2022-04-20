describe("The regCheck function", function() {
    it("should return true for a registration number that ends with a registration indicator 'GP' or 'MP' or 'EC' or 'L'", function() {
        assert.deepEqual(regCheck("COD 456 MP", "MP"), true);
    })

    it("should return true for a registration number that ends with a registration indicator 'GP' or 'MP' or 'EC' or 'L'", function() {
        assert.deepEqual(regCheck("EXP 491 L", "L"), true);
    })

    it("should return false for a registration number that does not end with input registration indicator", function() {
        assert.deepEqual(regCheck("YH 45 HN GP", "EC"), false);
    })

    it("should return false for registration number that does not end with registration indicator 'GP' or 'MP' or 'EC' or 'L'", function() {
        assert.deepEqual(regCheck("CY 485-589", "CY"), false);
    })
})