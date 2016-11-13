const encode = (id, secret) => {
	return new Buffer(`${id}:${secret}`).toString('base64');
};

const q = (obj) => { 
	return Object.keys(obj)
			.map(k => encodeURI(`${k}=${obj[k]}`))
			.join('&');
};

module.exports =  {q, encode};