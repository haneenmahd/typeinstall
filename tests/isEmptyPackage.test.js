describe("Check Environment", () => {
  it("Check Node ENV", () => {
    expect(typeof(process) !== undefined).toBe(true);
  });
});
