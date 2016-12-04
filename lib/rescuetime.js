const Api = require('./api');
const {q} = require('./utils');

function rescuetime(key){
	console.log(key)
	const api = Api({key});

	const get = api.get;
	const post = api.post;

	const analytics = params => api.get('data', {params});
	const summary = params => api.get('daily_summary_feed', {params})

	return { get, post, analytics, summary};
}

module.exports = rescuetime;