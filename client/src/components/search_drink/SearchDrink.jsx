// import React, { useState } from 'react';
// import { getTypes } from '../../services/apiType';

// function SearchDrink({ onTypeSelect }) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleSearch = async () => {
//     if (searchQuery.trim() === '') {
//       // Don't make the API call if the search query is empty
//       setSearchResults([]);
//       return;
//     }

//     try {
//       const types = await getTypes(searchQuery);

//       const filteredTypes = types.filter((type) =>
//         type.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setSearchResults(filteredTypes);
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     onTypeSelect(option);
//     setSearchQuery(option.name); // Set the input value to the selected option
//     setSearchResults([]); // Hide the dropdown
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for a drink"
//         value={searchQuery}
//         onChange={(e) => {
//           setSearchQuery(e.target.value);
//           handleSearch();
//         }}/>
//       {searchResults.length > 0 && (
//         <div className="dropdown">
//           {searchResults.map((option) => (
//             <div
//               key={option._id}
//               onClick={() => handleOptionSelect(option)}
//               className="dropdown-option">
//               {option.name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchDrink;