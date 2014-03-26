describe("My Calculator", function () {
    it("Test (1)   Multiply two numbers", function () {
        expect(Calc.MultplyNo(10, 10)).toBe(100);

    })

    it("Test (2)   MultplyNo should be able to deal with strings", function () {

        expect(function () { Calc.MultplyNo(10, "hello") }).toThrow(new Error("Not a Number"));
    })
    it("Test (3)   Divide Two numbers", function () {
        expect(Calc.DivideNo(10, 2)).toBe(5);

    })

    

    it("Test (3)   Divide should be able to deal with strings", function () {

        expect(function () { Calc.DivideNo(10, "hello") }).toThrow(new Error("Not a Number"));
    })

    it("Test (4)   Check for Divide by Zero", function () {
        expect(function () { Calc.DivideNo(10, 0) }).toThrow(new Error("Divide by Zero"));

    })

    it("Test (5)   Add two numbers", function () {
        expect(Calc.AddNo(10, 10)).toBe(20);

    })

    it("Test (6)   AddNo should be able to deal with strings", function () {

        expect(function () { Calc.AddNo(10, "hello") }).toThrow(new Error("Not a Number"));
    })

    it("Test (7)   Subtract  two numbers", function () {
        expect(Calc.AddNo(10, 10)).toBe(20);

    })

    it("Test (8)   SubNo should be able to deal with strings", function () {

        expect(function () { Calc.SubNo(10, "hello") }).toThrow(new Error("Not a Number"));
    })
})
