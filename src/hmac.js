const { createHmac } = require('crypto');

const key = 'super-secret!';
const message = 'Happy Halloween!';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log('hmac 1:', hmac);

const key2 = 'other-password';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

console.log('hmac 2:', hmac2);