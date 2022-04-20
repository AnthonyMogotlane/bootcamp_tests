describe("The countAllFromTown function", () => {
    it("It should return 3 for passed string arguments 'CY 028-351, CY 568-341, CL 974-956, CY 548-312' and 'CY'.", () => {
        assert.deepEqual(countAllFromTown("CY 028-351, CY 568-341, CL 974-956, CY 548-312", "CY"), 3);
    })

    it("It should return 2 for passed string arguments 'CL 028-351, CL 548-312' and 'CL'.", () => {
        assert.deepEqual(countAllFromTown("CL 028-351, CL 548-312", "CL"), 2);
    })

    it("It should return 'No registration numbers starting with CA' for passed string arguments 'CL 028-351, CL 548-312, CY 028-351, CY 568-341' and 'CA'.", () => {
        assert.deepEqual(countAllFromTown("CL 028-351, CL 548-312, CY 028-351, CY 568-341", "CA"), "No registration numbers starting with CA");
    })
})