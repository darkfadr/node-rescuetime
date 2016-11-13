const golfnow = require('../lib/golfnow');
let api = '';
describe('GolfNow API Wrapper', () => {
	beforeAll(() => {
		api = golfnow({
			client_id: 'EBYP2DTX3MFHN4QZNTB4EHVYMF0YIRHL',
			client_secret: '4E2S-W_DPL^Ev&;L6xsi',
			channel_id: 19819});
	})

	it('is properly initialized', () => {
		expect(api.getChannel()).not.toBe(1);
		expect(api.getChannel()).toBe(19819);
		expect(Object.keys(api).length).toBe(10);
	});

})