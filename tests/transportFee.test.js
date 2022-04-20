describe("The transportFee function", () => {
    it("should return 'R20' if the input string is 'morning'", () => {
        assert.deepEqual(transportFee("morning"), "R20");
    })

    it("should return 'R10' if the input string is 'afternoon'", () => {
        assert.deepEqual(transportFee("afternoon"), "R10");
    })

    it("should return 'free' if the input string is 'nightshift'", () => {
        assert.deepEqual(transportFee("nightshift"), "free", "Is mahala for nightshift");
    })
})