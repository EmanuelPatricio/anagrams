const fs = require("fs");
let words = fs.readFileSync("./anagrams.txt").toString().split("\n");  

const File = module.exports = {
    IfExists: () =>{
        if(fs.existsSync("./anagrams.txt")) return true
        else return false
    },
    
    AreAnagrams: (test = words) =>{
        const anagrams = new Map();
        for (let i = 0; i < test.length; i++) {
            const word_sorted = test[i].split('').sort().join("");
            const ana = anagrams.get(word_sorted)
            if (ana){
                ana.push(test[i]);
               if(test != words) return true
            } 
            else anagrams.set(word_sorted, [test[i]]);
        }
        return anagrams
    },

    ShowAnagrams: anagrams => {
        for(let v of anagrams.values())
            if(v.length > 1) console.log(v)  
    },

    CountAnagrams: anagrams => {
        var counter = 0;
        for(let v of anagrams.values())
            if(v.length > 1) counter++
            
        return counter
    },

    AnagramsDuration: () => {
        const start_time = Date.now();
        File.AreAnagrams()
        const duration = Date.now() - start_time;
        return duration
    }

}

const r = File.AreAnagrams()
File.ShowAnagrams(r)
console.log("Counter: " +File.CountAnagrams(r))
console.log("Counter: " +File.AnagramsDuration())
