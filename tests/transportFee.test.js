describe("transportFee", () => {
    it("Should return 'R20' for morning shift", () => {
        assert.equal(transportFee("morning"), "R20");
    })

    it("Should return 'R10' for afternoon shift", () => {
        assert.equal(transportFee("afternoon"), "R10");
    })

    it("Should return 'free' for nightshift shift", () => {
        assert.equal(transportFee("nightshift"), "free", "Is mahala for nightshift");
    })
})