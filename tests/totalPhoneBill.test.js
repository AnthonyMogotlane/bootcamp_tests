describe("The totalPhoneBill function", () => {
    it("It should return total bill of 'R7.45' for 'call, sms, call, sms, sms'.", () => {
        assert.deepEqual(totalPhoneBill("call, sms, call, sms, sms"), "R7.45");
    })

    it("It should return total bill of 'R6.15' for 'call, sms, call'.", () => {
        assert.deepEqual(totalPhoneBill("call, sms, call"), "R6.15");
    })

    it("It should return 'Pass a string not a number' if the passed argument is a number.", () => {
        assert.deepEqual(totalPhoneBill(20), "Pass a string not a number");
    })


})