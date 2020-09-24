import "jest";
jasmine.DEFAULT_TIMEOUT_INTERVAL = 4000;

// help: https://facebook.github.io/jest/docs/expect.html

describe('Internal module test', () => {
  it('Person', () => {
    expect(1).toBe(1);
	});
});
