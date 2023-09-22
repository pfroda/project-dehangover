const url = 'http://localhost:4000/api';

export async function createUser (user) {
  try {
    const response = await fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({firstName: user.firstName, email: user.email, password: user.password})
      });
      const data = await response.json();
      return data;

  } catch (err) {
      console.log('Fetch error:', err);
    }
}

export async function loginUser (user) {
  try {
    const response = await fetch(`${url}/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({email: user.email, password: user.password})
    });
    const data = await response.json();
    return data;
    
  } catch (err) {
    console.log('Fetch error:', err)
  }
}