describe("countAllPaarl", () => {
    it("It should return 2 for 'CJ 547-598, CJ 585858'.", () => {
        assert.deepEqual(countAllPaarl("CJ 547-598, CJ 585858"), 2);
    })

    it("It should return 6 from 'CJ 547-598, CJ 585-858, CJ 547-598, CJ 455-858, CJ 647-124, CJ 585-858'.", () => {
        assert.deepEqual(countAllPaarl("CJ 547-598, CJ 585-858, CJ 547-598, CJ 455-858, CJ 647-124, CJ 585-858"), 6);
    })

    it("It should return 'No registration numbers in the passed string' for empty string.", () => {
        assert.deepEqual(countAllPaarl(""), "No registration numbers in the passed string");
    })
})