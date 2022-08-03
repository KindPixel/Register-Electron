//electron setup
const { app, BrowserWindow } = require('electron')
const path = require('path')
require('dotenv').config()

const createWindow = () => {
    const win = new BrowserWindow({
        width: 420,
        height: 500,
        resizable: false,
        icon: "/resources/images/icon.ico",
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration : true,
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

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


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

