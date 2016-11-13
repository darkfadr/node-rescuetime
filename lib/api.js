const axios = require('axios');
const {encode} = require('./utils');

function api({client_id, client_secret, baseURL}) {
	return axios.create({
		baseURL: baseURL || 'https://affiliate.gnsvc.com/api/v1/',
		timeout: 10000,
		headers: {Authorization: `Basic ${encode(client_id, client_secret)}`}
	});
}

module.exports = api;