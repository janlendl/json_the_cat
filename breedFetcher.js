const request = require('request');
const catBreed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  if (error || response.statusCode !== 200) { // generate error message if error and status is not 200
    console.log(`Error ${response.statusCode}, please check again!`);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) { // this will check if breed is in the result
    console.log(`${catBreed} type of breed NOT FOUND!`);
  }
  for (const keys in data) { // for loop to iterate on the objects to get the needed key value
    console.log(data[keys].description);
  }
});