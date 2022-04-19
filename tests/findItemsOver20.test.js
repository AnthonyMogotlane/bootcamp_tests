describe("findItemOver20", () => {
    it("It should return [{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}] for quantity over 20.", () => {
        let result = findItemsOver20([{name : 'apples', qty : 10}, {name : 'pears', qty : 37}, {name : 'bananas', qty : 27}, {name : 'apples', qty : 3}]);
        let expected = [{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}];
        assert.deepEqual(result, expected);
    })

    it("It should return [{name : 'mangos', qty : 25}, {name : 'oranges', qty : 27}] for quantity over 20.", () => {
        let result = findItemsOver20([{name : 'mangos', qty : 25}, {name : 'pears', qty : 10}, {name : 'oranges', qty : 27}, {name : 'apples', qty : 3}]);
        let expected = [{name : 'mangos', qty : 25}, {name : 'oranges', qty : 27}];
        assert.deepEqual(result, expected);
    })

    it("It should return 'No data in the list' for an empty array.", () => {
        assert.deepEqual(findItemsOver20([]), "No data in the list");
    })
})

