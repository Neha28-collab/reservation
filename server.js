const express = require("express");
const cors = require('cors');
const app = express();
const db = require('./db');
const Pizza = require('./models/pizzaModel');

app.use(express.json());
app.use(cors());

const pizzasRoute = require('./routes/pizzasRoute');
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/', ordersRoute)

app.get("/", (req, res) => {
    res.send("server working");
});

app.get("/getpizza", async (req, res) => {
    try {   
        const docs = await Pizza.find({}).exec();
        res.send(docs);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api/pizzas/getallpizzas', (req, res) => {
    // Handle the request and send the pizzas data
  });
  

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
