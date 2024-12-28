#### 1 If you want to extract name and city from the URL as route parameters:
   http://localhost:3000/Bhavesh/Pune
   const express = require('express');

    const app = express();

    app.get('/:name/:city', (req, res) => {
        const { name, city } = req.params; // Extract route parameters
        res.json({
            message: `${name} and ${city}`,
        });
    });

    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });

    req.params will now contain the values passed in the URL.

#### 2 If You Want to Use Query Parameters Instead
    If you'd prefer to pass name and city as query parameters:

    Example URL:
    http://localhost:3000/?name=Bhavesh&city=Pune

    const express = require('express');

    const app = express();

    app.get('/', (req, res) => {
        const { name, city } = req.query; // Extract query parameters
        res.json({
            message: `${name} and ${city}`,
        });
    });

    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });


    Key Differences
    Route Parameters: Part of the URL path, e.g., /Bhavesh/Pune.
    Query Parameters: Appended after ?, e.g., /?name=Bhavesh&city=Pune.

#### 3 Giving Undefined

    const express = require('express');
    const app = express();


    app.post('/data',(req,res)=>{
        const data = req.body;
        console.log(data);
        res.json({
            message:data
        })
        console.log(data);
    })

    app.listen(3000,()=>{
        console.log("server is listening");
    });

   ---- The issue occurs because you are trying to access req.body in the POST route, but Express does not parse the body of incoming requests by default. To resolve this, you need to use middleware such as express.json() to parse the JSON payload.

    Here's the corrected code:
    const express = require('express');

    const app = express();
    app.use(express.json());
    app.get('/:name/:city',(req,res)=>{
        const {name,city} = req.params;
        res.json({
        message:`${name} and ${city}`
        })
    })


    app.post('/data',(req,res)=>{
        const data = req.body;
        console.log(data);
        res.json({
            message:data
        })
        console.log(data);
    })

    app.listen(3000,()=>{
        console.log("server is listening");
    });