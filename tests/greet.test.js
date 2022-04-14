describe("greet", function() {
  it("It should return 'Hello, Mentors' for input 'Mentors'.", function () {
    assert.deepEqual(greet("Mentors"), "Hello, Mentors");
  })

  it("It should return 'Hello, Coders' for input 'Coders'.", function () {
    assert.deepEqual(greet("Coders"), "Hello, Coders");
  })

  it("It should return 'Please enter a valid name, not number' if the input in a number", () => {
    assert.equal(greet(10), "Please enter a valid name, not number")
  })
})
