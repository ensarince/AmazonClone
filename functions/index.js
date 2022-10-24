const functions = require("firebase-functions")
const express = require("express")
import dotenv from "dotenv"
const cors = require("cors");

const STRIPE_KEY = process.dotenv.SK_KEY;

const stripe = require("stripe")(`${STRIPE_KEY}`)

//API

//App config
const app = express();

//middlewares   
app.use(cors({ origin: true}));
app.use(express.json());
dotenv.config()

//API routes
app.get("/", (req, res) => 
    {
        res.status(200).send("hello world")
    }
)

app.post("/payments/create", async(req, res) => 
    {
        const total = req.query.total;
        console.log(total)
        console.log('Payment request Received for this amount -->', total)

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
            //OK - CREATED
        });
        res.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })
    }
)
//listen func
exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/clone-4dd78/us-central1/api