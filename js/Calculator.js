var Calc = (function () {

    return {
        AddNo: function (opOne, opTwo) {
            var oOne = parseInt(opOne);
            var oTwo = parseInt(opTwo);
            if (isNaN(oOne) || isNaN(oTwo)) {
                throw new Error("Not a Number");
            }
            var answer = oOne + oTwo

            return answer;

        },

        SubNo: function (opOne, opTwo) {
            var oOne = parseInt(opOne);
            var oTwo = parseInt(opTwo);
            if (isNaN(oOne) || isNaN(oTwo)) {
                throw new Error("Not a Number");
            }
            var answer = oOne - oTwo

            return answer;

        },
        MultplyNo: function (opOne, opTwo) {


            if (isNaN(opOne) || isNaN(opTwo)) {
                throw new Error("Not a Number");
            }

            var answer = opOne * opTwo

            return answer;

        },


        DivideNo: function (opOne, opTwo) {

            if (isNaN(opOne) || isNaN(opTwo)) {
                throw new Error("Not a Number");
            }

            if (opOne == 0 || opTwo == 0) {

                throw new Error("Divide by Zero");
            }


            var answer = opOne / opTwo

            return answer;

        },

        // formats to two decimal places    
        formatTwo: function (n) { n = parseFloat(n); return isNaN(n) ? false : n.toFixed(2); }

    }
})();// end of 