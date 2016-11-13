const Api = require('./api');
const {q} = require('./utils');

function golfnow({client_id, client_secret, channel_id}){
	const api = Api({client_id, client_secret});
	let channel = channel_id || 1;

	const root = () => api.get('/');
	const setChannel = id => {channel = id};
	const getChannel = () => channel;
	const channels = id => api.get(`/channels/${id || ''}`);
	const course = id => api.get(`/channels/${channel}/course/${id || ''}`);
	const courses = (params, chnl) => api.get(`/channels/${chnel || channel}/course-summaries?${q(params)}`);
	const rateTags = code => api.get(`/rate-tags/${code}`);
	const invoices = id => api.get(`/channels/${channel}/invoices`);
	const get = api.get;
	const post = api.post;

	return { get, post, root, setChannel, getChannel, channels, course, courses, rateTags, invoices };
}

module.exports = golfnow;