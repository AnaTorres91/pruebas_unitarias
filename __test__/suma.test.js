const sum = require('../utils/suma');

test("sumar 1 mas 2", () => {
    expect(sum(1,2)).toBe(3);
})

test("sumar 10 mas -8", () => {
    expect(sum(10,-8)).toBe(2);
})

test("sumar -1 mas -2", () => {
    expect(sum(-1,-2)).toBe(-3);
})

