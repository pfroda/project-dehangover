const url = 'http://localhost:4000/api';

export async function postDrink(newDrink) {
  try {
    const response = await fetch(`${url}/drinks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newDrink), // Pass the new drink object directly
    });

    if (!response.ok) {
      throw new Error('Failed to submit drink');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Fetch error:', err);
  }
}
