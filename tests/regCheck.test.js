describe("regCheck", function() {
    it("It should return true for registration number 'COD 456 MP' which ends with 'MP'.", function() {
        assert.deepEqual(regCheck("COD 456 MP", "MP"), true);
    })

    it("It should return true for registration number 'EXP 491 L' which ends with 'L'.", function() {
        assert.deepEqual(regCheck("EXP 491 L", "L"), true);
    })

    it("It should return false for registration number  'YH 45 HN GP' which does not ends with 'EC'.", function() {
        assert.deepEqual(regCheck("YH 45 HN GP", "EC"), false);
    })

    it("It should return false for registration number 'FHN 679 EC' which does not ends with 'MP'.", function() {
        assert.deepEqual(regCheck("FHN 679 EC", "MP"), false);
    })
})