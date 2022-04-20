describe("The findItemOver function", () => {
    it("should return items with quantity over the input threshold number", () => {
        let result = findItemsOver([{name : 'apples', qty : 10}, {name : 'pears', qty : 37}, {name : 'bananas', qty : 27}, {name : 'apples', qty : 3}], 30);
        assert.deepEqual(result, [{name : 'pears', qty : 37}]);
    })

    it("should return items with quantity over the input threshold number", () => {
        let result = findItemsOver([{name : 'apples', qty : 10}, {name : 'pears', qty : 37}, {name : 'bananas', qty : 50}, {name : 'apples', qty : 3}], 40);
        assert.deepEqual(result, [{name : 'bananas', qty : 50}]);
    })

    it("should return 'invalid threshold data input' if the input is a string", () => {
        assert.deepEqual(findItemsOver([{name : 'apples', qty : 10}, {name : 'pears', qty : 37}], "45"), "invalid threshold data input");
    })
})