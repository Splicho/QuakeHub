import fetch from 'node-fetch';

export async function get() {
  const apiKey = 'B454803BAD1B8E6AF360DC879897FD2D'; // Replace with your actual API key
  const appId = '282440'; // Replace with the actual app ID you need
  const apiUrl = `http://api.steampowered.com/IGameServersService/GetServerList/v1/?key=${encodeURIComponent(apiKey)}&filter=appid%5C${appId}`;

  console.log('Fetching data from:', apiUrl); // Log URL for debugging

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched data:', data); // Log fetched data for debugging
    return {
      body: JSON.stringify(data.response.servers),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error); // Log error for debugging
    return {
      status: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
