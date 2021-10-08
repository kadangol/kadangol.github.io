describe("String Filter", function() {
    describe("Filter a word from a sentence", function() {
        it("Expected output ('This house is not nice!') is 'This house is nice!'", function() {
            assert.equal("This house is nice!", "This house is not nice!".filter('not'))
        });
    });
});


describe("Array Sort", function() {
    describe("Sort using Bubble Sort algorithm", function() {
        it("Expected output of [-5, 7, 0, 2, -4, 1].bubbleSort() is [-5, -4, 0, 1, 2, 7]", function() {
            assert.deepEqual([-5, -4, 0, 1, 2, 7], [-5, 7, 0, 2, -4, 1].bubbleSort());
        });
    });
});


describe("Teacher class", function() {
    describe("Test output of teach method", function() {
        it("Expected output of Teacher.teach('WAP') is 'Kapil is now teaching WAP'", function() {
            let t = new Teacher();
            t.initialize("Kapil", 18);
            t.teach("WAP");

            assert.deepEqual('Kapil is now teaching WAP', t.teach('WAP'));
        });
    });
});