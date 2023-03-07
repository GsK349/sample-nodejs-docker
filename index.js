// const express = require('express')

// const app = express();

// app.get('/',(req,res) => {
//     res.send('Hi there');
// });

// app.listen(8080,()=>{
//     console.log('listening on port 8080')
// });

const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({

    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/',(req,res)=>{
    client.get('visits', (err,visits)=>{
        res.send('number of visits is '+ visits);
        client.set('visits',parseInt(visits)+1);
    });
});

app.listen(8081,()=>{
    console.log('listening on port 8081');
});

// (async function () {
//     var result = await returnsPromise().catch((e) => { console.error(e.message) })
//     console.log( result ? 'This was a success! ' + result : 'This was a failure.' )
//     })()