describe("My Calculator", function () {
    it("Multiply two numbers", function () {
        expect(Calc.MultplyNo(10, 10)).toBe(100);

    })

    it("MultplyNo should be able to deal with strings", function () {

        expect(function () { Calc.MultplyNo(10, "hello") }).toThrow(new Error("Not a Number"));
    })
    it("Divide Two numbers", function () {
        expect(Calc.DivideNo(10, 2)).toBe(5);

    })

    it("Divide should be able to deal with strings", function () {

        expect(function () { Calc.DivideNo(10, "hello") }).toThrow(new Error("Not a Number"));
    })

    it("Add two numbers", function () {
        expect(Calc.AddNo(10, 10)).toBe(20);

    })

    it("AddNo should be able to deal with strings", function () {

        expect(function () { Calc.AddNo(10, "hello") }).toThrow(new Error("Not a Number"));
    })

    it("Subtract  two numbers", function () {
        expect(Calc.AddNo(10, 10)).toBe(20);

    })

    it("SubNo should be able to deal with strings", function () {

        expect(function () { Calc.SubNo(10, "hello") }).toThrow(new Error("Not a Number"));
    })
})
