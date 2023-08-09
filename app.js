const express = require('express');
const app = express();
const mainRouter = require('./routers/main');

app.use(express.static('./public'));

const port = 3000;
app.listen(port, () => {
    console.log('Servidor funcionando ' + port);
});

app.use('/', mainRouter);
app.use('/about', mainRouter);
app.use('#portfolio', mainRouter);