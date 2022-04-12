describe("fromWhere", () => {
    it("Registration number 'CY 855-325' should be from 'Bellville'.", () => {
        assert.deepEqual(fromWhere("CY 855-325"), "Bellville");
    })

    it("Registration number 'CJ 235-896' should be from 'Paarl'.", () => {
        assert.deepEqual(fromWhere("CJ 235-896"), "Paarl");
    })
})