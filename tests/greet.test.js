describe("greet", function() {
  it('Anthony is greeted correctly.', function () {
    assert.deepEqual(greet("Anthony"), "Hello, Anthony");
  })

  it('codeX is greeted correctly.', function () {
    assert.deepEqual(greet("codeX"), "Hello, codeX");
  })

  it("error message for numbers as input", () => {
    assert.equal(greet(10), "Please enter a valid name, not number")
  })

})
