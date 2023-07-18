const express = require('express');
const enrouteAPI = require('./routes');
const morgan = require('morgan');
const handler = require('./err/handler');

const app = express();

const port = process.env.PORT || 3000;

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
enrouteAPI(app);

//errors
app.use(handler);
app.listen(port);