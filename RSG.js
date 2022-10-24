const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let names = ["Ivan","Petar","Yordan","Martin","Veselin","Ivaylo","Radoslav",'Zlatan','Kristiyan']
let places = ["Sofia",'Plovdiv','Pernik','Burgas','Varna','Kresna',"Stara Zagora",'Montana']
let verbs = ['eats','sees','plays with','holds','watch','brings',]
let nouns = ['stones','cake','apple','bikes','motorcycle','ball','PlayStation','TV']
let adverbs = ['slowly','sadly','rapidly','warmly','happily','diligently',]
let details = ['near the river','at home','at the stadium','in the park','away from everyone','at the field','infront of school']

function getRandomWord(arr){
    let word = arr[Math.floor(Math.random() * arr.length)];
    return word;
}
let randomName = getRandomWord(names)
let randomPlaces = getRandomWord(places)
let randomVerbs = getRandomWord(verbs)
let randomNouns = getRandomWord(nouns)
let randomAdverbs = getRandomWord(adverbs)
let randomDetails = getRandomWord(details)

let who = `${randomName} from ${randomPlaces}`;
let action = `${randomAdverbs} ${randomVerbs} ${randomNouns}`;
let sentence = `${who} ${action} ${randomDetails}.`;

console.log(`Hello, this is your first random-generated sentence:`);
console.log(sentence);

let recruisiveAsyncReadline = function() {
    readline.question('Click [Enter] to generate a new one.', string => {})
}