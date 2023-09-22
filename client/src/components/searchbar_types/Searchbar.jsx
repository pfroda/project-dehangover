import React, { useState } from 'react';
import { getTypes } from '../../services/apiType';
import { postDrink } from '../../services/apiDrink';
import './searchbar.css'


// DIRTY AF

function TypeSearch({ onTypeSelect }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      // Don't make the API call if the search query is empty
      setSearchResults([]);
      return;
    }

    try {
      const types = await getTypes(searchQuery);
      // console.log(types);

      const filteredTypes = types.filter((type) =>
        type.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredTypes);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onTypeSelect(option);
    setSearchQuery(option.name); // Set the input value to the selected option
    setSearchResults([]); // Hide the dropdown
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a drink"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch();
        }}
      />
      {searchResults.length > 0 && (
        <div className="dropdown">
          {searchResults.map((option) => (
            <div
              key={option._id}
              onClick={() => handleOptionSelect(option)}
              className="dropdown-option"
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
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
      console.log(newDrink);
    } catch (error) {
      console.error('Error submitting new drink:', error);
    }
  };

  return (
    selectedType && (
      <div className="selected-type">
        <div className="selected-type-img">
        <img src={`/assets/drinks/${selectedType.imageUrl}`} alt="" />
        </div>

        <p>{selectedType.name}</p>
        <input className="numConsumptions"
          type="number"
          placeholder="Number of Consumptions"
          value={numConsumptions}
          min="1"
          onChange={(e) => setNumConsumptions(e.target.value)}
        />
        <button onClick={handleDrinkSubmission}>Drink</button>
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
    // Call your API to create the new drink
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
