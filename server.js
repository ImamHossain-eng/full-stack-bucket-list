const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { PORT, mongoUri } = require('./config');
const bucketListItemRoutes = require('./routes/api/bucketListItems');

//Init Express
const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

//connect to db
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.log(err));



//Receive routes from 
app.use('/api/bucketListItems', bucketListItemRoutes);

app.get('/', function (req, res){
    res.send('Hello World');
});


app.listen(PORT, () => console.log(`Server Started on ${PORT}`));