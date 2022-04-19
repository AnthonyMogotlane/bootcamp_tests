describe("fromWhere", () => {
    it("It should return 'Bellville' for string 'CY 855-325'.", () => {
        assert.deepEqual(fromWhere("CY 855-325"), "Bellville");
    })

    it("It should return 'Paarl' for string 'CL 855-325'.", () => {
        assert.deepEqual(fromWhere("CJ 855-325"), "Paarl");
    })

    it("It should return 'Some other place!' for string 'CF 865-685'.", () => {
        assert.deepEqual(fromWhere("CF 865-685"), "Some other place!");
    })
})