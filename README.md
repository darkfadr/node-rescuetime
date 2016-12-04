RescueTime API

[![Build Status](https://travis-ci.org/darkfadr/node-rescuetime.svg?branch=master)](https://travis-ci.org/darkfadr/node-rescuetime)
> Promise based API library that exposes an abstraction over the RescueTime Analytics and Summary API.

# Usage
```
import rescuetime from 'node-rescuetime';

const rescue = rescuetime('API_KEY');

rescue.analytics({
	perspective: 'interval',
	restrict_kind: 'productivity'
})
.then(d => console.log(d))
.catch(err => console.log(err));
```

# API
At it's core `node-golfnow` uses `axios`. It currently exposes abstactions around the `[analytics, summaries]` resouces of the API, however any missing or new enpoint can be implemented via the the extension `get` and `post` methods

## Custom enpoints
The sdk exposes the `get` and `post` methods for customized integration with the RescueTime API

```
rescue.get(some_rescuetime_url)
	.then(res => console.log(res.data));
	.catch(err => console.log(err.response.data));


rescue.post(url, payload)
	.then(res => console.log(res.data));
	.catch(err => console.log(err.response.data));
```

# Constributors
Ashley Narcisse <ashlay49@gmail.com>