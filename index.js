// import GolfNow from 'lib/api';
var GolfNow = require('./lib/golfnow');

const config = {
	client_id: 'EBYP2DTX3MFHN4QZNTB4EHVYMF0YIRHL',
	client_secret: '4E2S-W_DPL^Ev&;L6xsi',
	channel: 19818
};

const api = new GolfNow(config);

/*api.courses({
		latitude: 25.7746303,
		longitude: -80.1930857,
		proximity: 50
	})
	.then(res => console.log(res.data))
	.catch(err => console.log(err)); */

api.rateTags('CI')
	.then(res => console.log(res.data))
	.catch(err => console.log(err));