describe("The countAllPaarl function", () => {
    it("should return how many registration numbers are from Paarl", () => {
        assert.deepEqual(countAllPaarl("CJ 547-598, CJ 585858"), 2);
    })

    it("should return how many registration numbers are from Paarl", () => {
        assert.deepEqual(countAllPaarl("CJ 547-598, CJ 585-858, CJ 547-598, CJ 455-858, CJ 647-124, CJ 585-858"), 6);
    })

    it("should return 'no registration numbers' if the input string is empty", () => {
        assert.deepEqual(countAllPaarl(""), "no registration numbers");
    })
})