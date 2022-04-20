describe("The totalPhoneBill function", () => {
    it("should return the total cost of the phone bill", () => {
        assert.deepEqual(totalPhoneBill("call, sms, call, sms, sms"), "R7.45");
    })

    it("should return 'invalid data input' if the input is a number", () => {
        assert.deepEqual(totalPhoneBill(20), "invalid data input");
    })

    it("should return R0.00 if no calls made or sms's sent", () => {
        assert.deepEqual(totalPhoneBill(""), "R0.00");
    })
})