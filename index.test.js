const File = require('./index.js')

describe("Anagram All Tests", () => {


    it("Verify if the File is not empty", () => {
        
        expect(File.IfExists()).toBe(true);

    })

    it("Verify if There are Anagrams ", () => {
        const testArray = ["Fernando1", "Fernando1","Luimi","La Magia de jeffrey"]
        expect(File.AreAnagrams(testArray)).toBe(true);
    })

    it("Verify if the amount of anagrams is 20683", () => {
        expect(File.CountAnagrams(File.AreAnagrams())).toBe(20683);
    })

    it("Check if time is less than 2 seconds ", () => {
        expect(File.AnagramsDuration()).toBeLessThan(2000);
    })

})
