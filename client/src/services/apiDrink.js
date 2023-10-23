const url = process.env.REACT_APP_APP_URL;

export async function postDrink(newDrink) {
  try {
    const response = await fetch(`${url}/api/drinks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newDrink),
    });

    if (!response.ok) {
      throw new Error('Failed to submit drink');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Post error:', err);
  }
}

export async function getUserDrinks(userId) {
    try {
      const response = await fetch(`${url}/api/drinks/user/${userId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
          },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Fetch error:', err);
      throw err;
    }
  }