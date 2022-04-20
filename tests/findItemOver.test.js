describe("The findItemOver function", () => {
    it("It should return [{name : 'pears', qty : 37}] for treshold over 30.", () => {
        let result = findItemsOver([{name : 'apples', qty : 10}, {name : 'pears', qty : 37}, {name : 'bananas', qty : 27}, {name : 'apples', qty : 3}], 30);
        assert.deepEqual(result, [{name : 'pears', qty : 37}]);
    })

    it("It should return [{name : 'bananas', qty : 50}] for treshold over 30.", () => {
        let result = findItemsOver([{name : 'apples', qty : 10}, {name : 'pears', qty : 37}, {name : 'bananas', qty : 50}, {name : 'apples', qty : 3}], 40);
        assert.deepEqual(result, [{name : 'bananas', qty : 50}]);
    })

    it("It should return 'The treshold should be a number not a string' when a string is passed instead of number on the second parameter.", () => {
        assert.deepEqual(findItemsOver([{name : 'apples', qty : 10}, {name : 'pears', qty : 37}], "45"), "The treshold should be a number not a string");
    })
})