const express = require('express')
const { connection } = require('./db');
const { UserRouter } = require('./routes/User.routes');
const { AdminRouter } = require('./routes/Admin.routes');
require('dotenv').config()
const cors = require('cors');
const {productRouter} = require("./Routes/product.routes");
const {dealRouter} = require("./Routes/deal.routes")




const app = express();
app.use(express.json());

app.use(cors());




app.use("/admin", AdminRouter)
app.use('/user', UserRouter);
app.use("/product" , productRouter);
app.use("/deal" , dealRouter);

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log("Not Connected to DB");
        console.log(err)
    }
    console.log(`Server is running on port ${process.env.port}`);
});