const request = require('request');
const catBreed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  if(error || response.statusCode !== 200) {
    console.log(`Error ${response.statusCode}, please check again!`);
    return;
  }
  const data = JSON.parse(body);
  for (const keys in data) {
    console.log(data[keys].description);
    }
});