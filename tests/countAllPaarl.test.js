describe("countAllPaarl", () => {
    it("It should be 2 from Paarl.", () => {
        assert.deepEqual(countAllPaarl("CJ 547-598, CJ 585858"), 2);
    })

    it("It should be 6 from Paarl.", () => {
        assert.deepEqual(countAllPaarl("CJ 547-598, CJ 585-858, CJ 547-598, CJ 455-858, CJ 647-124, CJ 585-858"), 6);
    })
})