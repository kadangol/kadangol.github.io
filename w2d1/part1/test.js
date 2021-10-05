describe("sum", function() {
    describe("input array and output sum of all item", function() {
        it("Expected output of sum([1, 2, 3]) is 6", function() {
            assert.equal(6, sum([1, 2, 3]));
        });

        it("Expected output of sum([1,2,9]) is 12", function() {
            assert.equal(12, sum([1, 2, 9]));
        });
    });
});


describe("multiply", function() {
    describe("input array and output product of all items", function() {
        it("Expected output of multiply([1,2,3]) is 6", function() {
            assert.equal(6, multiply([1, 2, 3]));
        });

        it("Expected output of multiply([1,2,9]) is 18 ", function() {
            assert.equal(18, multiply([1, 2, 9]));
        });
    });
});


describe("reverse", function() {
    describe("input string and output reverse it", function() {
        it("Expected output of reverse('cross-platform') is mroftalp-ssorc", function() {
            assert.equal('mroftalp-ssorc', reverse('cross-platform'));
        });

        it("Expected output of reverse('Corporation.') is noitaroproC", function() {
            assert.equal('.noitaroproC', reverse('Corporation.'));
        });
    });
});


describe("findLongestWord", function() {
    describe("input array and output longest word length", function() {
        it("Expected output of findLongestWord(['cross','platform']) is 8  ",
            function() {
                assert.equal(8, findLongestWord(['cross', 'platform']));
            });

        it("Expected output of findLongestWord(['cross','bat','at']) is 5 ",
            function() {
                assert.equal(5, findLongestWord(['cross', 'bat', 'at']));
            });
    });
});



describe("filterLongWords", function() {
    describe("input array and output filter its content based on word length", function() {
        it("Expected output of filterLongWords(['cross','platform'], 8) is undefined ",
            function() {
                assert.deepEqual(undefined, filterLongWords(['cross', 'platform'], 8));
            });

        it("Expected output of filterLongWords(['cross','bat','at'],3) is  ['cross']",
            function() {
                assert.equal(['cross'], filterLongWords(['cross', 'bat', 'at'], 3));
            });
    });
});