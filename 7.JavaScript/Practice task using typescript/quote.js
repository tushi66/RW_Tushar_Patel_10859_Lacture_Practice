// Quote application 
var categorylabel = {
    Motivation: "Motivational",
    love: "Love",
    Emotional: "Emotional",
    Life: "Life",
};
var quotes = [
    {
        id: 1,
        text: "Believe in yourself.",
        author: "Raj",
        category: "Motivational",
        featured: true,
        like: 54646,
    },
    {
        id: 2,
        text: "Love is the bridge between two hearts.",
        author: "Mega",
        category: "Love",
        featured: false,
        like: 454,
    },
    {
        id: 3,
        text: "Pain makes you stronger.",
        author: "pooja",
        category: "Emotional",
        featured: true,
        like: 4979645,
    },
    {
        id: 4,
        text: "Dream big and work hard.",
        author: "Moona",
        category: "Motivational",
        featured: false,
        like: 6568,
    },
    {
        id: 5,
        text: "True love begins where nothing is expected in return.",
        author: "abhi",
        category: "Life",
        featured: true,
        like: 666523,
    },
    {
        id: 6,
        text: "Sometimes silence is the loudest cry.",
        author: "Unknown",
        category: "Emotional",
        featured: false,
        like: 5498,
    }
];
console.log(quotes);
// loop with Condtion
for (var _i = 0, quotes_1 = quotes; _i < quotes_1.length; _i++) {
    var quote = quotes_1[_i];
    var status_1 = quote.featured ? "* Featured" : "Regular";
    //condition with popularity
    var popularity = quote.like > 4000 ? "Populer" : "Normal";
    // condition with labeling
    var label = categorylabel[quote.category];
    // condition with skip if not freatured
    if (!quote.featured) {
        console.log("[SKIP] ".concat(quote.author, " - not featured"));
        continue;
    }
    console.log("".concat(status_1, " | ").concat(quote.author));
    console.log("\"".concat(quote.text, "\""));
    console.log("Category : ".concat(quote.category, "  , Likes : ").concat(quote.like, "  , ").concat(popularity));
}
