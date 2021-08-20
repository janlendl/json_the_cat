const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error || response.statusCode !== 200) { // generate error message if error and status is not 200
      callback(error, null);
      // console.log(`Error ${response.statusCode}, please check again!`);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) { // this will check if breed is in the result
      callback(`${breedName} type of breed NOT FOUND!`, null);
    }
    for (const keys in data) { // for loop to iterate on the objects to get the needed key value
      callback(null, data[keys].description);
    }
  });
};

module.exports = { fetchBreedDescription };