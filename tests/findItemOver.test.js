describe("findItemOver", () => {
    it("The item quantity over treshold 30 is pears.", () => {
        let result = findItemsOver([{name : 'apples', qty : 10}, {name : 'pears', qty : 37}, {name : 'bananas', qty : 27}, {name : 'apples', qty : 3}], 30);
        assert.deepEqual(result, [{name : 'pears', qty : 37}]);
    })

    it("The item quantity over treshold 40 is bananas.", () => {
        let result = findItemsOver([{name : 'apples', qty : 10}, {name : 'pears', qty : 37}, {name : 'bananas', qty : 50}, {name : 'apples', qty : 3}], 40);
        assert.deepEqual(result, [{name : 'bananas', qty : 50}]);
    })
})