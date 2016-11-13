const api = require('../lib/api');
const {encode} = require('../lib/utils');
let instance = '';

describe('HTTP/API wrapper', () => {
	beforeAll(() => {
		instance = api({
			client_id: 'my_client_id',
			client_secret: 'my_supper_secret_key_my_application_to_call'
		}).defaults;
	})

	it('initialzises correctly', () => {
		const {headers, baseURL} = instance;

		expect(headers.Authorization).toBeDefined();
		expect(baseURL).toBe('https://affiliate.gnsvc.com/api/v1/');
	});

	it('properly authenticates using provide credentials', () => {
		const {headers, baseURL} = instance;
		const auth_token = encode('my_client_id','my_supper_secret_key_my_application_to_call');

		expect(headers.Authorization).toBe(`Basic ${auth_token}`);
	});
});