const axios = require('axios');

axios.interceptors.request.use(config => config, err => Promise.reject(err));
const encode = (id, secret) => new Buffer(`${id}:${secret}`).toString('base64')
const param = obj => {
	return Object.keys(obj)
			.map(k => encodeURI(`${k}=${obj[k]}`))
			.join('&');
};

function api({client_id, client_secret, baseURL}) {
	return axios.create({
		baseURL: baseURL || 'https://affiliate.gnsvc.com/api/v1/',
		timeout: 10000,
		headers: {Authorization: `Basic ${encode(client_id, client_secret)}`} //RUJZUDJEVFgzTUZITjRRWk5UQjRFSFZZTUYwWUlSSEw6NEUyUy1XX0RQTF5FdiY7TDZ4c2k=
	});
}

class GolfNow {
	constructor({client_id, client_secret, channel}) {  // contains client_id & client_secret
		this.api = api({client_id, client_secret});
		this.channel = channel;
	}
	root(){
		return this.api.get('/');
	}
	channels(id = ''){
		return this.api.get(`/channels/${id}`);	
	}
	course(channel){
		return this.api.get(`/channels/${channel || this.channel}`)
	}
	courses(params, channel){
		return this.api.get(`/channels/${this.channel}/course-summaries?${param(params)}`)
	}
}

module.exports = GolfNow;