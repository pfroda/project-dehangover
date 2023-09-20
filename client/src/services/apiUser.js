const url = 'http://localhost:4000/api';

export async function createUser(user) {
  try {
    const response = await fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({email: user.email, password: user.password, firstName: user.firstName})
      });
      const data = await response.json();
      return data;

  } catch (err) {
      console.log('Fetch error:', err);
    }
}