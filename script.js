function generate() {
    let authors = document.getElementById('author');
    let qts = document.getElementById('quote');

    const quotes = {
        "- Jules Renard": "The truly free man is the one who can turn down an invitation to dinner without giving an excuse.",
        "-Albert Einstein": "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty",
        "-Pierce Brown": "Man cannot be freed by the same injustice that enslaved it.",
        "-Candace Bushnell": "Maybe some women aren't meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.",
        "- Aaron Lauritsen": "There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.",
        "-C.S. Lewis": "“I was not born to be free---I was born to adore and obey.”"



    };
    let authorKeys = Object.keys(quotes);
    let auth = authorKeys[Math.floor(Math.random() * authorKeys.length)];
    authors.innerHTML = auth;

    let quotesVal = quotes[auth];

    qts.innerHTML = quotesVal;








}