const polly = require('polly-js');
const departuresServer = require('./server');
const internetAvailable = require('internet-available');
const axios = require('axios').default;
//Program start
//First off, we check for an internet connection

internetAvailable({
  timeout: 5000,
})
  .then(() => {
    polly()
      .waitAndRetry()
      .executeForNode(() => {
        getTimetable();
      });
  })
  .catch((err) => {
    //console.log(err);
    console.log('No internet.');
  });

//This function is here just to test our server
async function getTimetable() {
  try {
    const instance = axios.create({
      baseURL: 'http://localhost:2020',
      proxy: false,
    });

    const response = await instance.get('/');
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}
