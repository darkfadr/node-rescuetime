const {q, encode}  = require('../lib/utils');

describe('util functions', () => {
	it('q: Encodes object to uriencoded query string', () => {
		expect(q({a: 23, b: 'hello'})).toBe('a=23&b=hello');
	});

	it('encode: Base64 encodes id and secret', () => {
		expect(encode('EBYP2DTX3MFHN4QZNTB4EHVYMF0YIRHL', '4E2S-W_DPL^Ev&;L6xsi',))
			.toBe('RUJZUDJEVFgzTUZITjRRWk5UQjRFSFZZTUYwWUlSSEw6NEUyUy1XX0RQTF5FdiY7TDZ4c2k=');
	})
});