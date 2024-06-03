import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import analyticsRoutes from "./routes/analytics.js";
import generalRoutes from "./routes/general.js";
import chartsRoutes from "./routes/charts.js";

/* data imports */ 
import User from "./models/User.js";
import Analytics from './models/Analytics.js';
import AlertSeverity from './models/AlertSeverity.js';
import AlertTrend from './models/AlertTrend.js';
import SourceIPMap from './models/SourceIPMap.js';
import Breakdown from './models/Breakdown.js';
import OverallStat from './models/OverallStat.js';
import { networkSecurity } from './data/index.js'
import { dataUser } from "./data/userData.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(cors(
  {
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));

mongoose.connect('mongodb+srv://saifali:god_of_war%2AHECTOR%4021@cluster0.sozvqa7.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0');

/*Routes*/
app.use("/analytics", analyticsRoutes);
app.use("/general", generalRoutes);
app.use("/charts", chartsRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    
    /* ONLY ADD DATA ONE TIME */ 
    // OverallStat.insertMany(networkSecurity);
    // Breakdown.insertMany(networkSecurity);
    // SourceIPMap.insertMany(networkSecurity);
    // AlertTrend.insertMany(networkSecurity);
    // AlertSeverity.insertMany(networkSecurity);
    // Analytics.insertMany(networkSecurity);
    // User.insertMany(dataUser);
})
.catch((error) => console.log(`${error} did not connect`));
