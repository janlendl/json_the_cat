const request = require('request');
const catBreed = process.argv.slice(1);

request(`https://api.thecatapi.com/v1/breeds/search?q=siberian`, (error, response, body) => {
  const data = JSON.parse(body);
  for (const keys in data) {
    console.log(data[keys].description);
  }
});