// Quote application

const categoryLabel = {
  Motivational: "Motivational",
  Love: "Love",
  Emotional: "Emotional",
  Life: "Life",
};

const quotes = [
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
    author: "Pooja",
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
    author: "Abhi",
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

let res = document.getElementById("p1");

// res.innerHTML = quotes;


let output = "";

for (let quote of quotes) {

  const status = quote.featured ? " Featured" : "Regular";
  const popularity = quote.like > 10000 ? " Popular" : "Normal";

  output += `
    <div>
      <h3>${quote.text}</h3>
      <p>Author: ${quote.author}</p>
      <p>Category: ${categoryLabel[quote.category]}</p>
      <p>Likes: ${quote.like} (${popularity})</p>
      <p>Status: ${status}</p>
      <hr>
    </div>
  `;
}

res.innerHTML = output;

