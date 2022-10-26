function randomSentenceGenerator(){

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
let show = document.getElementById("demo").innerHTML = sentence;

let images = []
images[0] = '<img src=https://thumbs.dreamstime.com/b/single-stone-fine-sand-monochrome-image-36155349.jpg width="320" height="320">'
images[1] = '<img src=https://t4.ftcdn.net/jpg/03/08/40/43/360_F_308404381_LqyMIXDPOR6Ut1TqE2cJRQdxomGsQegc.jpg width="320" height="320">'
images[2] = '<img src=https://i.pinimg.com/474x/f6/e4/1a/f6e41a81ff32b2a8b40ff581b66ab669.jpg width="320" height="320">'
images[3] = '<img src=https://w0.peakpx.com/wallpaper/431/724/HD-wallpaper-bicycle-cycling-morning.jpg width="320" height="320">'
images[4] = '<img src=https://www.wallpaperup.com/uploads/wallpapers/2016/04/11/927425/c60c568a708d19eb92a896a6c0de3336-700.jpg width="320" height=320">'
images[5] = '<img src=https://w0.peakpx.com/wallpaper/395/376/HD-wallpaper-fifa-2014-addidas-athletic-ball-champion-kick-soccer-sports-world-cup.jpg width="320" height="320">'
images[6] = '<img src=https://img2.goodfon.com/wallpaper/nbig/5/3f/hi-tech-playstation-4-pro.jpg width="320" height="320">'
images[7] = '<img src=https://i.pinimg.com/736x/4b/d2/8f/4bd28f3c397337bc7b66a2b743c0813b.jpg width="320" height="320">'

if(show.includes('stones')){
    document.getElementById("result").innerHTML = images[0]
}else if(show.includes('cake')){
    document.getElementById("result").innerHTML = images[1]
}else if(show.includes('apple')){
    document.getElementById("result").innerHTML = images[2]
}else if(show.includes('bikes')){
    document.getElementById("result").innerHTML = images[3]
}else if(show.includes('motorcycle')){
    document.getElementById("result").innerHTML = images[4]
}else if(show.includes('ball')){
    document.getElementById("result").innerHTML = images[5]
}else if(show.includes('PlayStation')){
    document.getElementById("result").innerHTML = images[6]
}else if(show.includes('TV')){
    document.getElementById("result").innerHTML = images[7];
}
}randomSentenceGenerator()
