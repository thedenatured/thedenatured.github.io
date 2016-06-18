/* step 1/2 create a "var" for your new article, put it above the first var. use the existing as an example the name can be anything as long as it is unique
you'll have to remember it for when you create the actual page that the article is on. the name goes after var for example
var name = { etc...
title:          the title is how it shows over the summary boxes at the bottom of the page. the <br /> is what seperate the 1st and 2nd line
image:          image is the adress of the perfectly square image you want for the summary boxes
link:           this is the adress of the article page
describe:       make this about the same length as the rest. if it doesn't take up as many lines as the others in situ it messes with the layout
                (puts a white box arround your summary box) and you'll have to adjust the describe here to get it right.

step 2 is at the bottom of the page
*/
var pointlessOrgans = {
    heading: "Pointless Organs",
    title:"Pointless<br>Organs",
    image: "http://thedenatured.com/images/summary/pointless.jpg",
    link: "/videos/pointlessOrgans.html",
    describe: "Your body is a finely honed machine, evolution has shaped you to perfection right? Actually evolution is a tad lazy so you've got some spare bits. Like the appendix, what even is the point?",
    type: "video"
    };

var hitchhiker = {
    heading: "The Microscopic Hitchhiker",
    title: "The Microscopic Hitchhiker",
    image: "http://thedenatured.com/images/summary/Hitchhiker_square.jpg",
    link: "http://thedenatured.com/articles/hitchhiker.html",
    describe: "Think of a hitchhiker and you might conjure up images of a group of carefree students on a jail break, Jim Morrison of The Doors or maybe even, for the biologists out there...",
    type: "article",
};

var smell = {
    heading: "A Smell Is Worth A Thousand Words",
    title: "A Smell Is Worth <br />A Thousand Words",
    image: "http://thedenatured.com/images/summary/darkEyeJunco.jpg",
    link: "http://thedenatured.com/articles/aSmell.html",
    describe: "We humans like to smell good, using perfumes and colognes to try and give us an edge. Smell is used to win over a partner throughout the animal kingdom, albeit in a different fashion.",
    type: "article",
};

var sexyMen = {
    heading:"Sexy Men",
    title: "Sexy<br />Men",
    image: "http://thedenatured.com/images/summary/peacock2.jpg",
    link: "http://thedenatured.com/videos/sexyMen.html",
    describe: "You want to know why men are so damn sexy? Well over here at The Denatured we know a thing or two about sexy men, so let us be your guide in this erotic part of science.",
    type: "video"
};

var chilli = {
    title: "The Unlikely<br />Winner",
    image: "http://thedenatured.com/images/summary/rooster.jpg",
    link: "http://thedenatured.com/articles/theUnlikelyWinner.html",
    describe: "You will beat your everyday chicken in most competitions even if you have to get inventive. There is, however, one competition in which you will meet your match.",
    type: "article"
};
var zombie = {
    title: "",
    image: "http://thedenatured.com/images/summary/zombie.bmp",
    link: "http://thedenatured.com/videos/zombie.html",
    describe: "It's Halloween so we've gone slightly off of the beaten track of science. We're talking about how Zombies could be real. Thanks to Our beautiful new editor: Lightning Storr",
    type: "video"
};
var dying = {
    title: "Dying? <br /> What For",
    image: "http://thedenatured.com/images/summary/skullMeSq.jpg",
    link: "http://thedenatured.com/videos/whyDie.html",
    describe: "Why do we grow old and die? It might seem like ageing isn't a good adaptation but as ever evolution has the answer. And as ever we're going to have a pop at explaining it for you. Enjoy.",
    type: "video"
};
var teach = {
    title: "Teach<br /> The Kids",
    image: "http://thedenatured.com/images/summary/blackBoard.jpg",
    link: "http://thedenatured.com/articles/teach1.html",
    describe: "What gets you excited about science? Is it the smell of freshly poured agar in the morning? What gets teenagers excited about science? Apparently nothing.",
    type: "article"
};
var adder = {
    title: "European<br />Adder",
    image: "http://thedenatured.com/images/summary/adderSQ.jpg",
    link: "http://thedenatured.com/videos/adder.html",
    describe: "The enigmatic European Adder is one of the hardiest and widespread snakes on earth, and is Britain's only venomous snake. Unfortunately, it is suffering declines due to ...",
    type: "video"
};
var frack = {
    title: "What the<br />Frack?",
    image: "http://thedenatured.com/images/summary/fracking.jpg",
    link: "http://thedenatured.com/articles/whatTheFrack.html",
    describe: "As protestors gather this week against the test oil drilling ('fracking') we're led to question what the frack are they going on about and why is this such an important environmental issue?",
    type: "article"
};
var fittest = {
    title: 'Survival of<br />The "Fittests"',
    image: "http://thedenatured.com/images/summary/sqBadgerChimp.jpg",
    link: "http://thedenatured.com/videos/survivalOfTheFittest.html",
    describe: "Selection doesn't make individuals better. I have a go at making the aim of evolution a bit clearer for folks and have a chatter about the concept of selfishness.",
    type: "video"
};
var blink = {
    title: "Blink and<br />You'll Miss It",
    image: "http://thedenatured.com/images/summary/falcon.jpg",
    link: "http://thedenatured.com/articles/blinkAnd.html",
    describe: "He's been stalking his prey for hours and it's all been boiling down to this moment. He crouches down and tenses his muscles, ready to attack and claim his prize. The chase begins.",
    type: "article"
};
var prettyBird = {
    title: "Pretty Bird<br />Ugly Friends",
    image: "http://thedenatured.com/images/summary/housefinch.jpg",
    link: "http://thedenatured.com/videos/prettyBirdUglyFriends.html",
    describe: "Male finches may pick and choose their social group to maximise their chance of mating. They will leave a group of pretty males in the hopes of finding uglier friends.",
    type: "video"
};
var hipster = {
    title: "Hipster<br />Animals",
    image: "http://thedenatured.com/images/summary/kermode.jpg",
    link: "http://thedenatured.com/videos/hipsterAnimals.html",
    describe: "Most animals tend to be quite similar to each other with in a species but some animals choose their own style. This video looks at how unusual individuals cope with life.",
    type: "video"
};
var rhea = {
    title: "Rhea:<br />Artist",
    image: "/images/authorRhea.jpg",
    link: "",
    describe: "A MASSIVE thanks to Rhea 'Lightning-Storr' who we've press ganged into giving up her  artisty time to edit our videos for us. I really couldn't make these without her.",
    type: "article"
};
/*step 2/2 put the name you used in the var above at the start of this list and seperate it with a comma.
*/
var summaries = [pointlessOrgans, hitchhiker, smell, sexyMen, chilli, zombie, dying, teach, adder, frack, fittest, blink, prettyBird, hipster, rhea];