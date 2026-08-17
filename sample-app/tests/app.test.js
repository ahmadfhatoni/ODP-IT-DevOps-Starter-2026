const test = require('node:test');
const assert = require('node:assert/strict');
const { healthPayload } = require('../src/app');

test('health payload reports UP', () => {
  const payload = healthPayload();
  assert.equal(payload.status, 'UP');
  assert.equal(payload.service, 'banking-devops-demo');
});
