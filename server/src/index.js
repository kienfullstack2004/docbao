import express from "express";
import cors from "cors";
const app = express();
require('dotenv').config()
import router from "./router";

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods:['GET','POST','PUT','DELETE']
}));

router(app);

const listen = app.listen(process.env.PORT,()=>{
    console.log('App listening on port ' + listen.address().port);
})

