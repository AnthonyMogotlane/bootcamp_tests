describe("greet function", function() {
  it('Anthony is greeted correctly', function () {
    assert.equal(greet("Anthony"), "Hello, Anthony");
  })

  it('codeX is greeted correctly', function () {
    assert.equal(greet("codeX"), "Hello, codeX");
  })
})
