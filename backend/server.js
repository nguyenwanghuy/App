import express from 'express';
import router from './routes/index.js'
import "dotenv/config";
import cors from "cors"
import { connectToDatabase } from './configs/db.conflig.js';
const app = express();
const PORT = 4000;


const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
//conect to db
connectToDatabase();

//Global middlewares
app.use(express.json());
app.use(cors())

//routing
app.use('/api', router)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});