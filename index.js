const rt = require('./lib/rescuetime');
const api =  rt('API_KEY_HERE');

api.analytics({
	perspective: 'interval',
	restrict_kind: 'productivity'
})
.then(d => console.log(d.data))
.catch(err => console.log('fail'));