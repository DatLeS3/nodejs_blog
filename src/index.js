const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//http logger
app.use(morgan('combined'));

//template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');


app.get('/trang-chu', (req, res) => {
    return res.send(' <h1> Hello World!! </h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})