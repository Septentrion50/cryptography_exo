const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./pub_key_sys');

const message = 'Zgladavadjan';

const encryptedData = publicEncrypt(
  publicKey,
  Buffer.from(message)
);

console.log(encryptedData.toString('hex'));

const decryptedData = privateDecrypt(
  privateKey,
  encryptedData
);

console.log(decryptedData.toString('utf-8'));