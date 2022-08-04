require('dotenv').config()

//mongo setup
const MongoClient = require('mongodb').MongoClient
const url = process.env.MONGO_URL;

var collection = null

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }
    // Specify database you want to access
    const db = client.db('Automate');
    collection = db.collection('users');
    console.log(`MongoDB Connected: ${url}`);
});
