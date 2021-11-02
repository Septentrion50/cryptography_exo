const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

const message = 'I like trains';
const key = randomBytes(32);
const iv = randomBytes(16);

// Encryption
const cypher = createCipheriv('aes256', key, iv);
const encryptedMessage = cypher.update(message, 'utf8', 'hex') + cypher.final('hex');

// Decryption
const deCypher = createDecipheriv('aes256', key, iv);
const deCryptedMessage = deCypher.update(encryptedMessage, 'hex', 'utf-8') + deCypher.final('utf8');

console.log(`cyphered: ${encryptedMessage.toString('utf-8')}`);
console.log(`decyphered: ${deCryptedMessage.toString('utf-8')}`);