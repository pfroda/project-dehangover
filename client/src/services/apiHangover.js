const url = 'http://localhost:4000/api';

export async function postHangover(newHangover) {
    try {
        const response = await fetch(`${url}/hangovers`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newHangover),
        });

        if (!response.ok) {
            throw new Error('Failed to submit hangover');
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.log('Post error:', err)
    }
}

export async function getUserHangovers(userId) {
    try {
        const response = await fetch(`${url}/hangovers/user/${userId}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
        })
        const data = await response.json();
        return data;

    } catch (err) {
        console.log('Fetch error:', err);
        throw err;
    }
}