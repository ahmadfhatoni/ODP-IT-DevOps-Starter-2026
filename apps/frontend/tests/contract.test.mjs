import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const js = fs.readFileSync(new URL('../src/app.js', import.meta.url), 'utf8');

test('frontend references stable JakOne endpoints', () => {
  for (const path of ['/api/v1/health', '/api/v1/accounts/', '/transact', '/mutations']) {
    assert.ok(js.includes(path), `missing ${path}`);
  }
});

test('frontend uses current transaction field names', () => {
  for (const field of ['type:', 'channel:', 'amount:']) assert.ok(js.includes(field));
});
