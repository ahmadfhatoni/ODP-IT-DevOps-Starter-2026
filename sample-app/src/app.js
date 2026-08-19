const accounts = new Map();
let accountSeq = 1000001;
let mutationSeq = 1;

function send(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {'content-type':'application/json; charset=utf-8'});
  res.end(payload);
}
async function body(req) {
  const chunks=[];
  for await (const c of req) chunks.push(c);
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}
function seed() {
  if (accounts.size) return;
  accounts.set('DKI-1029384', {
    id: 1, accountNumber:'DKI-1029384',
    customerNik:'3171012345670001',
    customerName:'Nasabah Sample DKI',
    balance:500000,
    createdAt:new Date().toISOString(),
    mutations:[{
      id: mutationSeq++, accountNumber:'DKI-1029384',
      transactionType:'DEPOSIT', channel:'TRANSFER',
      amount:500000, resultingBalance:500000,
      createdAt:new Date().toISOString()
    }]
  });
}
seed();

function publicAccount(a) {
  const {mutations, ...rest}=a; return rest;
}

async function handler(req,res) {
  const u = new URL(req.url,'http://localhost');
  if (req.method==='GET' && u.pathname==='/health')
    return send(res,200,{status:'UP',service:'jakone-account-service-mock',environment:process.env.APP_ENV||'development'});

  if (req.method==='POST' && u.pathname==='/api/v1/accounts') {
    const b=await body(req);
    if(!b.customerNik || !b.customerName) return send(res,400,{error:'customerNik and customerName are required'});
    const accountNumber=`DKI-${accountSeq++}`;
    const balance=Number(b.initialBalance ?? b.balance ?? 0);
    const a={id:accounts.size+1,accountNumber,customerNik:b.customerNik,customerName:b.customerName,balance,createdAt:new Date().toISOString(),mutations:[]};
    if(balance>0) a.mutations.push({id:mutationSeq++,accountNumber,transactionType:'DEPOSIT',channel:'TRANSFER',amount:balance,resultingBalance:balance,createdAt:new Date().toISOString()});
    accounts.set(accountNumber,a);
    return send(res,201,publicAccount(a));
  }

  const m = u.pathname.match(/^\/api\/v1\/accounts\/([^/]+)(?:\/(transact|mutations))?$/);
  if (m) {
    const accountNumber=decodeURIComponent(m[1]), action=m[2];
    const a=accounts.get(accountNumber);
    if(!a) return send(res,404,{error:'Account not found'});

    if(req.method==='GET' && !action) return send(res,200,publicAccount(a));
    if(req.method==='GET' && action==='mutations') return send(res,200,[...a.mutations].reverse());

    if(req.method==='POST' && action==='transact') {
      const b=await body(req);
      const type=String(b.transactionType||'').toUpperCase();
      const channel=String(b.channel||'TRANSFER').toUpperCase();
      const amount=Number(b.amount||0);
      if(!['DEPOSIT','WITHDRAWAL'].includes(type) || amount<=0) return send(res,400,{error:'Invalid transaction'});
      if(type==='WITHDRAWAL' && amount>a.balance) return send(res,400,{error:'Insufficient balance'});
      a.balance += type==='DEPOSIT' ? amount : -amount;
      const mutation={id:mutationSeq++,accountNumber,transactionType:type,channel,amount,resultingBalance:a.balance,createdAt:new Date().toISOString()};
      a.mutations.push(mutation);
      return send(res,200,mutation);
    }
  }
  return send(res,404,{error:'Not Found'});
}

module.exports={handler,accounts};
