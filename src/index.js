const bodyParser = require('body-parser');
const express = require('express');

const setupAndStartServer = async = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(3000,()=>{
        console.log(`Server Started at 3000`);
    })
}

setupAndStartServer();