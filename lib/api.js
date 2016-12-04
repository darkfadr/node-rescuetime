const axios = require('axios');
const strip = require('striptags');
const {encode} = require('./utils');

function api({key, baseURL}) {
	return axios.create({
		baseURL: baseURL || 'https://www.rescuetime.com/anapi',
		timeout: 10000,
		params: {key},
		headers: {'Content-Type': 'application/json; charset=utf-8'},
		transformResponse: [(data) => {
			const str = strip(data)
				.replace('\n\n\n  RescueTime\n  \n  \n  \n\n\n\n\n', '')
				.replace(`\n\n\n\n`, '');

			return JSON.parse(str);
		}],
	});
}

module.exports = api;