describe("countAllFromTown", () => {
    it("It should return 3 for 'CY' Bellville reg numbers.", () => {
        assert.deepEqual(countAllFromTown("CY 028-351, CY 568-341, CL 974-956, CY 548-312", "CY"), 3)
    })

    it("It should return 2 for 'CL' Stellenbosch reg numbers.", () => {
        assert.deepEqual(countAllFromTown("CL 028-351, CL 548-312", "CL"), 2)
    })
})