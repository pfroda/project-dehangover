const url = 'http://localhost:4000/api';

export async function getTypes() {
   try {
    const response = await fetch(`${url}/type`);
    const data = await response.json();
    return data;

  } catch (err) {
    console.log('Fetch error:', err);
  }
}