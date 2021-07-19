const quote = document.querySelector(".quote #quote");
const author = document.querySelector(".quote #author");

const listQuote = [
    {
        quote:"That's your best friend and your worst enemy - your own brain.",
        author:"Fred Durst"
    },
    {
        quote:"The best way to find yourself is to lose yourself in the service of others.",
        author:"Mahatma Gandhi"
    },
    {
        quote:"Whether it's the best of times or the worst of times, it's the only time we've got.",
        author:"Art Buchwald",
    },
    {
        quote:"The best revenge is massive success.",
        author:"Frank Sinatra"
    },
    {
        quote:"There are some things you learn best in calm, and some in storm.",
        author:"Willa Cather"
    },
    {
        quote:"I'm selfish, impatient, and a little insecure. I make mistakes, I'm out of control, and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author:"Marilyn Monroe"
    },
    {
        quote:"Living well is the best revenge.",
        author:"George Herbert"
    },
    {
        quote:"To give anything less than your best, is to sacrifice the gift.",
        author:"Steve Prefontaine"
    },
    {
        quote:"A problem is a chance for you to do your best.",
        author:"Duke Ellington"
    },
    {
        quote:"The best way to predict the future is to create it.",
        author:"Peter Drucker"
    },
];

const randomQuote = listQuote[Math.floor(Math.random() * listQuote.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
