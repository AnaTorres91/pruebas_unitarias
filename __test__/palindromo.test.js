const palindromo = require('../utils/palindromo');

test("Dar la vuelta a la palabra Roma", () => {
    expect(palindromo("Roma")).toBe("amoR")
})

test("Dar la vuelta a la palabra Paseo", () => {
    expect(palindromo("Paseo")).toBe("oesaP")
})

