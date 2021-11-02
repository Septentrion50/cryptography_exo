const { generateKeyPairSync } = require('crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, // The length of the key in bits
  publicKeyEncoding: {
    type: 'spki', // Recommended by Node.js docs
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8', // Recommended by Node.js docs
    format: 'pem'
    // cipher: 'aes-256-cbc,
    // passphrase: 'top-secret,
  }
});

console.log(publicKey);
console.log(privateKey);

module.exports = { publicKey, privateKey };