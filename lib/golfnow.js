const api = require('./api');
const q = (obj) => { 
	return Object.keys(obj)
			.map(k => encodeURI(`${k}=${obj[k]}`))
			.join('&');
};

class GolfNow {
	constructor({client_id, client_secret, channel}) {
		this.api = api({client_id, client_secret});
		this.channel = channel;
	}
	root(){
		return this.api.get('/');
	}
	channels(id = ''){
		return this.api.get(`/channels/${id}`);	
	}
	course(id){
		return this.api.get(`/channels/${this.channel}/course/${id}`)
	}
	courses(params, channel){
		return this.api.get(`/channels/${this.channel}/course-summaries?${q(params)}`)
	}
	rates()
	rateTags(code = ''){
		return this.api.get(`/rate-tags/${code}`);
	}
	invoices(id = ''){
		return this.api.get(`/channels/${this.channel}/invoices`)
	}
}

module.exports = GolfNow;