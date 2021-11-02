const { createHash } = require('crypto');

const hash = (input) => {
    return createHash('sha256').update(input).digest('hex');
}

let password = 'hi-mom!';

console.log(hash(password));