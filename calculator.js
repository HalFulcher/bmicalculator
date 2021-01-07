const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/bmicalculator', function(req, res){
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function(req, res){
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    const bmi = weight / (height * height);

    res.send(`Your BMI is ${bmi}.`)
})


app.listen(3000, function(){
    console.log('Server started on port 3000');
});