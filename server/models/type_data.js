const Types = require('./Type');


// Define an array of drink types (predefined drinks with data) and add them to db; don't allow duplicates

async function addDrinkTypes() {
    
const drinkTypes = [
    
  // beers
  {
    name: 'Beer',
    category: 'beers',
    alcohol: 0.05,
    imageUrl: '../client/src/assets/drinks/beer.png',
  },
  {
    name: 'Craft Beer',
    category: 'beers',
    alcohol: 0.09,
    imageUrl: '../client/src/assets/drinks/craft_beer.png',
  },

  // wines
  {
    name: 'Red wine',
    category: 'wines',
    alcohol: 0.12,
    imageUrl: '../client/src/assets/drinks/red_wine.png',
  },
  {
    name: 'White wine',
    category: 'wines',
    alcohol: 0.10,
    imageUrl: '../client/src/assets/drinks/white_wine.png',
  },
  {
    name: 'Rosé wine',
    category: 'wines',
    alcohol: 0.10,
    imageUrl: '../client/src/assets/drinks/rose_wine.png',
  },
  {
    name: 'Champagne',
    category: 'wines',
    alcohol: 0.12,
    imageUrl: '../client/src/assets/drinks/champagne.png',
  },
  {
    name: 'Cider',
    category: 'wines',
    alcohol: 0.045,
    imageUrl: '../client/src/assets/drinks/cider.png',
  },
  {
    name: 'Martini',
    category: 'wines',
    alcohol: 0.15,
    imageUrl: '../client/src/assets/drinks/martini.png',
  },
  {
    name: 'Vermouth',
    category: 'wines',
    alcohol: 0.16,
    imageUrl: '../client/src/assets/drinks/vermouth.png',
  },
  {
    name: 'Aperol Spritz',
    category: 'wines',
    alcohol: 0.11,
    imageUrl: '../client/src/assets/drinks/aperol.png',
  },
  {
    name: 'Campari',
    category: 'wines',
    alcohol: 0.14,
    imageUrl: '../client/src/assets/drinks/campari.png',
  },

  // destillates
      {
        name: 'Whisky On The Rock',
        category: 'baseLiquors',
        alcohol: 0.41,
        imageUrl: '../client/src/assets/drinks/whisky.png',
      },
      {
        name: 'Rum',
        category: 'baseLiquors',
        alcohol: 0.40,
        imageUrl: '../client/src/assets/drinks/rum.png',
      },
      {
        name: 'Cognac',
        category: 'baseLiquors',
        alcohol: 0.40,
        imageUrl: '../client/src/assets/drinks/cognac.png',
      },
      {
        name: 'Vodka',
        category: 'baseLiquors',
        alcohol: 0.38,
        imageUrl: '../client/src/assets/drinks/vodka.png',
      },
      {
        name: 'Tequila',
        category: 'baseLiquors',
        alcohol: 0.39,
        imageUrl: '../client/src/assets/drinks/tequila.png',
      },

      // cocktails
      {
        name: 'Gin and Tonic',
        category: 'cocktails',
        alcohol: 0.16,
        imageUrl: '../client/src/assets/drinks/gintonic.png',
      },
      {
        name: 'Moscow Mule',
        category: 'cocktails',
        alcohol: 0.11,
        imageUrl: '../client/src/assets/drinks/moscow.png',
      },
      {
        name: 'Rum & Cola',
        category: 'cocktails',
        alcohol: 0.14,
        imageUrl: '../client/src/assets/drinks/rumcola.png',
      },
    {
      name: 'Bloody Mary',
      category: 'cocktails',
      alcohol: 0.09,
      imageUrl: '../client/src/assets/drinks/bloodymary.png',
    },
    {
      name: 'Old Fashioned',
      category: 'cocktails',
      alcohol: 0.4,
      imageUrl: '../client/src/assets/drinks/oldfashioned.png',
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