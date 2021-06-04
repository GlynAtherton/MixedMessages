// Quotes from "The Meaning of Liff"
let quotesMeaningOfLiff = [
    "Ardcrony (n.) : A remote acquaintance passed off as 'a very good friend of mine' by someone trying to impress people.",
    "Symond’s Yat (n.) : The little spoonful inside the lid of a recently opened boiled egg.",
    "Trantlemore (vb.) : To make a noise like a train crossing a set of points.",
    "Beccles (n.) : The small bone buttons placed in bacon sandwiches by unemployed guerrilla dentist.",
    "Scraptoft (n.) : The absurd flap of hair a vain and balding man grows long above one ear to comb it to the other ear.",
    "Clunes (pl.n.) : People who just won't go.",
    "Skenfrith (n.) : The flakes of athlete's foot found inside socks.",
    "Huttoft (n.) : The fibrous algae which grows in the dark, moist environment of trouser turn-ups.",
];

let quote1 = quotesMeaningOfLiff[Math.floor(Math.random() * quotesMeaningOfLiff.length)];
quote1 = '\nMeaning of Liff:\n' + quote1;
console.log(quote1);

let quotesFortuneCookie = [
    "Today it's up to you to create the peacefulness you long for.",
    "A friend asks only for your time not your money.",
    "If you refuse to accept anything but the best, you very often get it.",
    "A smile is your passport into the hearts of others.",
    "Hard work pays off in the future, laziness pays off now.",
    "Change can hurt, but it leads a path to something better.",
    "A chance meeting opens new doors to success and friendship.",
];

let quote2 = quotesFortuneCookie[Math.floor(Math.random() * quotesFortuneCookie.length)];
quote2 = '\nFortune Cookie:\n' + quote2;
console.log(quote2);

let quotesInspirational = [
    "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "Keep your face always toward the sunshine - and shadows will fall behind you.",
    "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
    "The best preparation for tomorrow is doing your best today.",
    "No act of kindness, no matter how small, is ever wasted.",
]

let quote3 = quotesInspirational[Math.floor(Math.random() * quotesInspirational.length)];
quote3 = '\nInspiration:\n' + quote3;
console.log(quote3);
