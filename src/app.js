import polly from 'polly-js';
import { departuresServer } from './server';
import internetAvailable from 'internet-available';

//Program start
//First off, we check for an internet connection

internetAvailable({
	timeout: 5000,
})
	.then(() => {
		polly()
			.waitAndRetry()
			.executeForNode(() => {
				departuresServer('Hello from the other side.');
			});
	})
	.catch(() => {
		console.log('No internet.');
	});
