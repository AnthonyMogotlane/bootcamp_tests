describe("The transportFee function", () => {
    it("Should return 'R20' for morning shift.", () => {
        assert.deepEqual(transportFee("morning"), "R20");
    })

    it("Should return 'R10' for afternoon shift.", () => {
        assert.deepEqual(transportFee("afternoon"), "R10");
    })

    it("Should return 'free' for nightshift shift.", () => {
        assert.deepEqual(transportFee("nightshift"), "free", "Is mahala for nightshift");
    })
})