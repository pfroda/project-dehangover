import React, { useState } from 'react';
import { getTypes } from '../../services/apiType';
import { postDrink } from '../../services/apiDrink'

function TypeSearch({ onTypeSelect }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const types = await getTypes(searchQuery);
      setSearchResults(types);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a drink"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((type) => (
          <li key={type._id} onClick={() => onTypeSelect(type)}>
            {type.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DrinkForm({ selectedType, onSubmit }) {
  const [numConsumptions, setNumConsumptions] = useState(1);

  const handleDrinkSubmission = async () => {
    try {
      const newDrink = {
        user: 'user_id_here', // Replace with the user's ID
        type: selectedType._id,
        numConsumptions,
      };

      // Make the API call to submit the new drink
      await postDrink(newDrink);
    } catch (error) {
      console.error('Error submitting new drink:', error);
    }
  };

  return (
    selectedType && (
      <div>
        <p>Selected Type: {selectedType.name}</p>
        <input
          type="number"
          placeholder="Number of Consumptions"
          value={numConsumptions}
          onChange={(e) => setNumConsumptions(e.target.value)}
        />
        <button onClick={handleDrinkSubmission}>Add Drink</button>
      </div>
    )
  );
}

function Searchbar() {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  const handleSubmit = async (newDrink) => {
    // Handle the submission of the new drink here
    // You can call your API to create the new drink
    console.log('Submitting new drink:', newDrink);
  };

  return (
    <div>
      <TypeSearch onTypeSelect={handleTypeSelection} />
      <DrinkForm selectedType={selectedType} onSubmit={handleSubmit} />
    </div>
  );
}

export default Searchbar;
