const isUpperCase = require('../utils/esmayuscula');

test("Comprobar si es mayuscula", () => {
    expect(isUpperCase("MADRID")).toBe(true)
})

test("Comprobar si es no mayuscula", () => {
    expect(isUpperCase("MadRiD")).toBe(false)
})

test("Comprobar si es no mayuscula", () => {
    expect(isUpperCase("madrid")).toBe(false)
})


