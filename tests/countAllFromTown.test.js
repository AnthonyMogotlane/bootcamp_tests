describe("The countAllFromTown function", () => {
    it("should return how many registration numbers from the input registration indicator", () => {
        assert.deepEqual(countAllFromTown("CY 028-351, CY 568-341, CL 974-956, CY 548-312", "CY"), 3);
    })

    it("should return how many registration numbers from the input registration indicator", () => {
        assert.deepEqual(countAllFromTown("CL 028-351, CL 548-312", "CL"), 2);
    })

    it("should return 0 for input registration indicator that is not included in the input registration numbers", () => {
        assert.deepEqual(countAllFromTown("CL 028-351, CL 548-312, CY 028-351, CY 568-341", "CA"), 0);
    })
})