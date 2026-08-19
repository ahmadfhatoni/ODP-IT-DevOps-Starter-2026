const test = require('node:test');
const assert = require('node:assert/strict');
const {accounts} = require('../src/app');

test('seed account exists', () => {
  assert.ok(accounts.has('DKI-1029384'));
  assert.equal(accounts.get('DKI-1029384').balance, 500000);
});

test('seed mutation is a deposit', () => {
  const m = accounts.get('DKI-1029384').mutations[0];
  assert.equal(m.transactionType, 'DEPOSIT');
  assert.equal(m.channel, 'TRANSFER');
});
