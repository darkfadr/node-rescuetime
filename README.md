Golf Now API

> Doing this cause I didnt like the implementation of another solution

```
import GolfNow from 'node-golfnow';

const config = {
	client_id: 'insert client id here',
	client_secret: 'supper secret client key right here'
};

const api = GolfNow(config);

api.root()
	.then(res => console.log(res.data));
```