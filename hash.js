const { createHash } = require('crypto');

// Creating the hash function
function hash(input) {
  return createHash('sha256').update(input).digest('hex');
};

// Comparing the hashed password
let password = 'zgladavadjan';
const hash1 = hash(password);
console.log(hash1);

// After some time
password = 'Zgladavadjan';
const hash2 = hash(password);
console.log(hash2);
const match = hash1 === hash2;

console.log(match ? 'good password' : 'password do not match');