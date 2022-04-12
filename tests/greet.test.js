describe("greet", function() {
  it('Anthony is greeted correctly.', function () {
    assert.deepEqual(greet("Anthony"), "Hello, Anthony");
  })

  it('codeX is greeted correctly.', function () {
    assert.deepEqual(greet("codeX"), "Hello, codeX");
  })
})
