describe("totalPhoneBill", () => {
    it("Total bill for 'call, sms, call, sms, sms' should be 'R7.45'.", () => {
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), "R7.45")
    })

    it("Total bill for 'call, sms, call' should be 'R6.15'.", () => {
        assert.equal(totalPhoneBill("call, sms, call"), "R6.15")
    })
})