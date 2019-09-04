const express = require('express');
const bodyParser = require('body-parser');

const port = 5000;

// Create the express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parses text as url encoded data
app.use(bodyParser.json()); // Parses text as json

// In a realistic scenario this would instead return values from a database
var subscribers = [
    {email: 'john.doe@gmail.com'},
    {email: 'jane.doe@gmail.com'},
    {email: 'james.smith@hotmail.com'},
    {email: 'jen.johnson@gmail.com'},
    {email: 'michael.brown@gmail.com'},
    {email: 'sarah.davis@yahoo.com'},
    {email: 'charles.clark@gmail.com'}
];

// Route
app.get('/api/subscriberlist', function(req, res) {
    res.json(subscribers);
});

app.post('/api/subscribers', function(req, res) {

    console.log("Request received!")

    // Returns true/false depending on whether given email exists
    if (subscribers.some(e => e.email == req.body.post)) {
        console.log("Email address already exists in array");
        res.send("User is already subscriber");
    }
    else {
        console.log("Email address doesn't exist in array")
        subscribers.push({email: req.body.post})
        res.send("User has been added as subscriber");
    }
    
    console.log(subscribers)
});

// Listen to requests
app.listen(port, function() {
    console.log(`Now listening for requests on port ${port}.`);
});



