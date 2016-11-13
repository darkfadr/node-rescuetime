// import GolfNow from 'lib/api';
const golfnow = require('./lib/golfnow');
const api = golfnow({
			client_id: 'EBYP2DTX3MFHN4QZNTB4EHVYMF0YIRHL',
			client_secret: '4E2S-W_DPL^Ev&;L6xsi',
			channel_id: 19818});


api.rateTags('CI')
	.then(res => console.log(res.data))
	.catch(err => console.log(err));

// api.rateTags('CI')
// 	.then(res => console.log(res.data))
// 	.catch(err => console.log(err));