describe("regCheck", function() {
    it("The registration number 'COD 456 MP' ends with 'MP', thats correct.", function() {
        assert.deepEqual(regCheck("COD 456 MP", "MP"), true);
    })j

    it("The registration number 'EXP 491 L' ends with 'L', thats correct.", function() {
        assert.deepEqual(regCheck("EXP 491 L", "L"), true);
    })

    it("The registration number 'YH 45 HN GP' does not end with 'EC', that is incorrect", function() {
        assert.deepEqual(regCheck("YH 45 HN GP", "EC"), false);
    })

    it("The registration number 'FHN 679 EC' does not end with 'MP', that is incorrect", function() {
        assert.deepEqual(regCheck("FHN 679 EC", "MP"), false);
    })
})