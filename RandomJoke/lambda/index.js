const Alexa = require('alexa-sdk');
const request = require('request');
const APP_ID = 'amzn1.ask.skill.cf04f674-8ced-4b60-86fd-8c8905cbd995';

exports.handler = function(event, context, callback)
{
   var alexa = Alexa.handler(event, context, callback);
   alexa.appId = APP_ID;
   alexa.registerHandlers(handlers);
   alexa.execute();
};

var jokeDB = [
    'I am nobody. Nobody is perfect. I am perfect.',
    'LOOOOOOOL',
    'hahahaha',
    'YOLO'
];

var thisjoke= '';
var handlers = 
{
    'LaunchRequest':function()
    {
        this.emit(':tell',"Welcome to my cold joke.")
    }, 
    'GetNewJoke':function()
    {
        // var randomIndex = Math.floor(Math.random()*jokeDB.length);
        // this.emit(':tellWithCard',jokeDB[randomIndex],'Random Joke',jokeDB[randomIndex]);
        request({url:'https://api.icndb.com/jokes/random'},
        function(err, httpResponse, body){
            var result = JSON.parse(body);
            thisjoke = result.value.joke;
        });
        this.emit(':tellWithCard',thisjoke,'Random Joke', thisjoke);
    },
};
