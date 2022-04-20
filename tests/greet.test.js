describe("The greet function", function() {
  it("should return 'Hello, Mentors' for input 'Mentors'", function () {
    assert.deepEqual(greet("Mentors"), "Hello, Mentors");
  })

  it("should return 'Hello, Coders' for input 'Coders'", function () {
    assert.deepEqual(greet("Coders"), "Hello, Coders");
  })

  it("should return 'invalid input' if the input is not a string", () => {
    assert.equal(greet(10), "invalid input")
  })
})
