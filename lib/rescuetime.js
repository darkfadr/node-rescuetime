const Api = require('./api');
const {q} = require('./utils');

function rescuetime(key){
	// transform option
	const api = Api({key});
	
	const {get, post} = api;
	const analytics = params => api.get('data', {params});
	const summary = params => api.get('daily_summary_feed', {params})

	return { get, post, analytics, summary};
}

module.exports = rescuetime;