import express from "express"

import rateLimit from 'express-rate-limit';
import { fixedRouter } from "../Routes/FixedRoutes.js";
import { dynamicRouter } from "../Routes/DynamicRoutes.js";
const app = express()



const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

app.use(limiter);


app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded




//routes declaration
app.use("/donotuse",fixedRouter)
app.use(dynamicRouter)





app.listen(process.env.PORT,()=>{
    console.log(`server running on ${process.env.PORT}`);
    
})