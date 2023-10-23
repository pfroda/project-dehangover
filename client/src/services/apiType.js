const url = process.env.REACT_APP_APP_URL;

export async function getTypes() {
   try {
    const response = await fetch(`${url}/api/type`);
    const data = await response.json();
    return data;

  } catch (err) {
    console.log('Fetch error:', err);
  }
}