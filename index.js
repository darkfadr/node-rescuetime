// import GolfNow from 'lib/api';
var GolfNow = require('./lib/api');


const config = {
	client_id: 'EBYP2DTX3MFHN4QZNTB4EHVYMF0YIRHL',
	client_secret: '4E2S-W_DPL^Ev&;L6xsi'
};

const api = new GolfNow(config);

api.root()
	.then(res => console.log(res.data))
	.catch(err => console.log(err.response.data));