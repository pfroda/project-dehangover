const url = process.env.REACT_APP_APP_URL;

export async function createUser(user) {
  try {
    const response = await fetch(`${url}/api/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName: user.firstName,
        email: user.email,
        password: user.password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Fetch error:", err.message);
  }
}

export async function loginUser(user) {
  try {
    const response = await fetch(`${url}/api/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: user.email, password: user.password }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Fetch error:", err);
  }
}
