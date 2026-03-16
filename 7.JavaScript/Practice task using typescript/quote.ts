// Quote application 

interface Quote {

    id : number;
    text: string;
    author: string;
    category:string;
    like: number;
    featured:boolean;


}

const categorylabel: Record<string, string> ={

    Motivation : "Motivational",
    love : "Love",
    Emotional : "Emotional",
    Life : "Life",
}

const quotes: Quote[] = [
      {
    id: 1,
    text: "Believe in yourself.",
    author: "Raj",
    category: "Motivational",
    featured: true,
    like:54646,
  },
  {
    id: 2,
    text: "Love is the bridge between two hearts.",
    author: "Mega",
    category: "Love",
    featured: false,
    like:454,
  },
  {
    id: 3,
    text: "Pain makes you stronger.",
    author: "pooja",
    category: "Emotional",
    featured: true,
    like:4979645,
  },
  {
    id: 4,
    text: "Dream big and work hard.",
    author: "Moona",
    category: "Motivational",
    featured: false,
    like:6568,

  },
  {
    id: 5,
    text: "True love begins where nothing is expected in return.",
    author: "abhi",
    category: "Life",
    featured: true,
    like:666523,
  },
  {
    id: 6,
    text: "Sometimes silence is the loudest cry.",
    author: "Unknown",
    category: "Emotional",
    featured: false,
    like:5498,
  }

]

console.log(quotes);

// loop with Condtion

for(const quote of quotes){

  const status : string = quote.featured ?  "* Featured" : "Regular";

    //condition with popularity

    const popularity : string = quote.like > 4000 ? "Populer" : "Normal";

    // condition with labeling
    
    
    const label : string = categorylabel[quote.category];
    
    // condition with skip if not freatured
    
    
    if(!quote.featured){
        console.log(`[SKIP] ${quote.author} - not featured`);
        continue;
    }
    
    
    console.log(`${status} | ${quote.author}`);
    console.log(`"${quote.text}"`);
    console.log(`Category : ${quote.category}  , Likes : ${quote.like}  , ${popularity}`);



}
