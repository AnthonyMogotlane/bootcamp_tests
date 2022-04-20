describe("The findItemOver20 function", () => {
    it("should return items with quantity over 20", () => {
        let result = findItemsOver20([{name : 'apples', qty : 10}, {name : 'pears', qty : 37}, {name : 'bananas', qty : 27}, {name : 'apples', qty : 3}]);
        let expected = [{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}];
        assert.deepEqual(result, expected);
    })

    it("should return items with quantity over 20", () => {
        let result = findItemsOver20([{name : 'mangos', qty : 25}, {name : 'pears', qty : 10}, {name : 'oranges', qty : 27}, {name : 'apples', qty : 3}]);
        let expected = [{name : 'mangos', qty : 25}, {name : 'oranges', qty : 27}];
        assert.deepEqual(result, expected);
    })

    it("should return 'no items in the list' for an empty list", () => {
        assert.deepEqual(findItemsOver20([]), "no items in the list");
    })
})

