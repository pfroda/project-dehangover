const Types = require('./Type');

// Define an array of drink types (predefined drinks with data) and add them to db; don't allow duplicates

async function addDrinkTypes() {
    
const drinkTypes = [
    
  // beers
  {
    name: 'Beer',
    category: 'beers',
    alcohol: 0.05,
    imageUrl: 'beer.png',
  },
  {
    name: 'Craft Beer',
    category: 'beers',
    alcohol: 0.09,
    imageUrl: 'craft_beer.png',
  },

  // wines
  {
    name: 'Red wine',
    category: 'wines',
    alcohol: 0.12,
    imageUrl: 'red_wine.png',
  },
  {
    name: 'White wine',
    category: 'wines',
    alcohol: 0.10,
    imageUrl: 'white_wine.png',
  },
  {
    name: 'Rosé wine',
    category: 'wines',
    alcohol: 0.10,
    imageUrl: 'rose_wine.png',
  },
  {
    name: 'Champagne',
    category: 'wines',
    alcohol: 0.12,
    imageUrl: 'champagne.png',
  },
  {
    name: 'Cider',
    category: 'wines',
    alcohol: 0.045,
    imageUrl: 'cider.png',
  },
  {
    name: 'Martini',
    category: 'wines',
    alcohol: 0.15,
    imageUrl: 'martini.png',
  },
  {
    name: 'Vermouth',
    category: 'wines',
    alcohol: 0.16,
    imageUrl: 'vermouth.png',
  },
  {
    name: 'Aperol Spritz',
    category: 'wines',
    alcohol: 0.11,
    imageUrl: 'aperol.png',
  },
  {
    name: 'Campari',
    category: 'wines',
    alcohol: 0.14,
    imageUrl: 'campari.png',
  },

  // destillates
  {
    name: 'Whisky On The Rock',
    category: 'baseLiquors',
    alcohol: 0.41,
    imageUrl: 'whisky.png',
  },
  {
    name: 'Rum',
    category: 'baseLiquors',
    alcohol: 0.40,
    imageUrl: 'rum.png',
  },
  {
    name: 'Cognac',
    category: 'baseLiquors',
    alcohol: 0.40,
    imageUrl: 'cognac.png',
  },
  {
    name: 'Vodka',
    category: 'baseLiquors',
    alcohol: 0.38,
    imageUrl: 'vodka.png',
  },
  {
    name: 'Tequila',
    category: 'baseLiquors',
    alcohol: 0.39,
    imageUrl: 'tequila.png',
  },

  // cocktails
  {
    name: 'Gin and Tonic',
    category: 'cocktails',
    alcohol: 0.16,
    imageUrl: 'gintonic.png',
  },
  {
    name: 'Moscow Mule',
    category: 'cocktails',
    alcohol: 0.11,
    imageUrl: 'moscow.png',
  },
  {
    name: 'Rum & Cola',
    category: 'cocktails',
    alcohol: 0.14,
    imageUrl: 'rumcola.png',
  },
  {
    name: 'Bloody Mary',
    category: 'cocktails',
    alcohol: 0.09,
    imageUrl: 'bloodymary.png',
  },
  {
    name: 'Old Fashioned',
    category: 'cocktails',
    alcohol: 0.4,
    imageUrl: 'oldfashioned.png',
  },
  ];
  

for (let drink of drinkTypes) {
  try {
    await Types.updateOne({ name: drink.name }, drink, { upsert: true, multi: true });
    console.log(`Added ${drink.name} to db`);

    } catch (error) {
        console.log(`Error adding ${drink.name}: ${error.message}`);
    }
}
}

addDrinkTypes().catch((error) => console.error(error))