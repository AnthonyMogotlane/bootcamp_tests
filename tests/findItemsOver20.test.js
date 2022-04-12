describe("findItemOver20", () => {
    it("The qualtity of 'pears and bananas' are over 20", () => {
        let result = findItemsOver20([{name : 'apples', qty : 10}, {name : 'pears', qty : 37}, {name : 'bananas', qty : 27}, {name : 'apples', qty : 3}]);
        let expected = [{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}];
        assert.deepEqual(result, expected);
    })

    it("The qualtity of 'Mangos and Oranges' are over 20", () => {
        let result = findItemsOver20([{name : 'mangos', qty : 25}, {name : 'pears', qty : 10}, {name : 'oranges', qty : 27}, {name : 'apples', qty : 3}]);
        let expected = [{name : 'mangos', qty : 25}, {name : 'oranges', qty : 27}];
        assert.deepEqual(result, expected);
    })
})

