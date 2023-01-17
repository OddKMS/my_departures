import polly from 'polly-js';
import internetAvailable from 'internet-available';
import axios from 'axios';

//Program start
//First off, we check for an internet connection
internetAvailable({
  timeout: 5000,
})
  .then(() => {
    polly()
      .waitAndRetry(2)
      .executeForNode(() => {
        getTimetable();
      });
  })
  .catch(() => {
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
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
}
