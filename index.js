// import GolfNow from 'lib/api';
const rt = require('./lib/rescuetime');
const key = 'B63A6Z9UdENcLLYpA_qRpETJgZxO_s8vOpF1bOXp';

const api =  rt(key);

api.analytics({
	perspective: 'interval',
	restrict_kind: 'productivity'
})
	.then(d => console.log(d))
	.catch(err => console.log('fail'));