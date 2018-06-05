const app = require('express')();
const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log('olá a todos');
});

app.get('/', (req, res) => {
    res.send(JSON.stringify(process.env, null, 2));
})