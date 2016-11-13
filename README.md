Golf Now API

[![Build Status](https://travis-ci.org/darkfadr/node-golfnow.svg?branch=master)](https://travis-ci.org/darkfadr/node-golfnow)
> Promise based API library that exposes an abstraction over the GolfNow Affiliate API. Doing this cause I didn't like the implementation of another solution.

# Usage
```
import golfnow from 'node-golfnow';
//const golfnow = require('golfnow'); // for non import env

const api = golfnow({
	client_id: 'insert client id here',
	client_secret: 'supper secret client key right here',
	channel_id: 19189 //optional || default is 1
});

api.root()
	.then(res => console.log(res.data));
	.catch(err => console.log(err.response.data));

api.channel()
	.then(res => console.log(res.data));
	.catch(err => console.log(err.response.data));
```

# API
At it's core `node-golfnow` uses `axios`. It currently exposes abstactions around the `[root, channels, course, courses, rateTags, invoices]` resouces of the API, however any missing or new enpoint can be implemented via the the extension `get` and `post` methods

## Custom enpoints
The sdk exposes the `get` and `post` methods for customized integration with the GolfNow Affiliate API

```
const channel = api.getChannel();

api.get(`/channels/${channel}/customers/${customer-email}/reservations/${reservation-id}`)
	.then(res => console.log(res.data));
	.catch(err => console.log(err.response.data));


app.post(url, payload)
	.then(res => console.log(res.data));
	.catch(err => console.log(err.response.data));
```

# Constributors
Ashley Narcisse <ashlay49@gmail.com>