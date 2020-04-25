let lang = ["HTML", "JavaScript","CSS"];

lang [8] = "C#";

console.log(lang)


let realLength = lang.length
for (let i = 0; i < realLength; i++) {
    if (lang[i] == undefined) {
        lang.splice(i, 1)
        i--;
        realLength--;
    }
}


/*
WAY 2

function SpliceEmpty(lang)
        {
            for(let i = 0; i < lang.length; i++)
            {
                if  (lang[i] == undefined || lang[i] == null)
                {
                    lang.splice(i, 1);
                    i--;
                }
               
            }
            return lang;
        }

lang = SpliceEmpty(lang);
*/
        
/*
WAY 3

lang.filter(x => x != undefined)
*/

console.log(lang)
