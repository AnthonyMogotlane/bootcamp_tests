describe("The fromWhere function", () => {
    it("should return the town the input registration number is from", () => {
        assert.deepEqual(fromWhere("CY 855-325"), "Bellville");
    })

    it("should return the town the input registration number is from", () => {
        assert.deepEqual(fromWhere("CJ 855-325"), "Paarl");
    })

    it("should return 'some other place' if the registration indicator does not start with 'CY' or 'CF' or 'CA'", () => {
        assert.deepEqual(fromWhere("CF 865-685"), "some other place!");
    })
})