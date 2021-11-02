const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

const signup = (email, password) => {
    // Generate a salt which is just random characters added onto the hashed password. Scrypt is a way to add proof of work to the hashing
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}`};

    return user;
}

const login = (email, password) => {
    const user = users.find(v => v.email === email);

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
    // This prevents timing attacks where the hacker gets information about the hash via the time it takes to complete
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        console.log('Successful login');
    } else {
        console.log('Unsuccessful login :(')
    }
}

const users = [];

const user = signup('foo@bar.com', 'pa$$word');

console.log(user)

users.push(user);

login('foo@bar.com', 'pa$$word')
