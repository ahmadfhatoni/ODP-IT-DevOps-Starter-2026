function json(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(payload)
  });
  res.end(payload);
}

function healthPayload() {
  return {
    status: 'UP',
    service: 'banking-devops-demo',
    environment: process.env.APP_ENV || 'development'
  };
}

function handler(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    return json(res, 200, {
      name: 'ODP IT Banking DevOps Demo',
      message: 'Use /health, /api/accounts, or /api/transactions'
    });
  }

  if (req.method === 'GET' && req.url === '/health') {
    return json(res, 200, healthPayload());
  }

  if (req.method === 'GET' && req.url === '/api/accounts') {
    return json(res, 200, {
      accounts: [
        { id: 'ACCT-DEMO-001', type: 'SAVINGS', balance: 1250000 },
        { id: 'ACCT-DEMO-002', type: 'CURRENT', balance: 875000 }
      ],
      demoData: true
    });
  }

  if (req.method === 'GET' && req.url === '/api/transactions') {
    return json(res, 200, {
      transactions: [
        { id: 'TX-DEMO-001', amount: 150000, status: 'COMPLETED' },
        { id: 'TX-DEMO-002', amount: 250000, status: 'PENDING' }
      ],
      demoData: true
    });
  }

  return json(res, 404, { error: 'Not Found' });
}

module.exports = { handler, healthPayload };
