const express = require('express');

const app = express();
app.use(express.json());


const hosp = [{
    name:"John",
    kidnyes:{
        healthy:"1",
        unhealthy:"1"
    }
}]


app.get('/check',(req,res)=>{
    res.json({
    healthy: hosp[0].kidnyes.healthy,
    unhealthy: hosp[0].kidnyes.unhealthy,
    })
})

app.post('/insert',(req,res)=>{
    if (hosp[0].kidnyes.healthy == 2 || hosp[0].kidnyes.unhealthy == 0) {
        return res.status(400).json({
            error: "Condition met: healthy is 2 or unhealthy is 0. Operation not allowed.",
        });
    }
    
    let {x} = req.body;
    x = parseInt(x);


    hosp[0].kidnyes.healthy = parseInt(hosp[0].kidnyes.healthy, 10) + x; // Add x to healthy
    hosp[0].kidnyes.unhealthy = parseInt(hosp[0].kidnyes.unhealthy, 10) - x; // Subtract x from unhealthy

    res.json({
        msg:hosp
    })

})

app.put('/repair/:unhealthy',(req,res)=>{
    if(hosp[0].kidnyes.healthy==2){
        return res.status(400).json({
            error: "Condition met: healthy is 2 or unhealthy is 0. Operation not allowed.",
        });
    }
    let {unhealthy} = req.params;
    unhealthy = parseInt(unhealthy);

    hosp[0].kidnyes.healthy = parseInt(hosp[0].kidnyes.healthy, 10) + unhealthy; // Add x to healthy
    hosp[0].kidnyes.unhealthy = parseInt(hosp[0].kidnyes.unhealthy, 10) - unhealthy; // Subtract x from unhealthy
    res.json({
        msg:hosp
    })
    
})

app.delete('/remove',(req,res)=>{
    if(hosp[0].kidnyes.healthy==2){
        return res.status(400).json({
            error: "Condition met: healthy is 2 or unhealthy is 0. Operation not allowed.",
        });
    }

    let {unhealthy} = req.query;
    unhealthy = parseInt(unhealthy);

    hosp[0].kidnyes.unhealthy = parseInt(hosp[0].kidnyes.unhealthy, 10) - unhealthy
    res.json({
        msg:hosp
    })
})

app.listen(3000,()=>{
    console.log("server is listening");
});