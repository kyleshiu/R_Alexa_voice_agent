const Alexa = require('alexa-sdk');
const APP_ID = 'amzn1.ask.skill.8887a1e9-83e9-4790-b2f6-0900202d6108';

exports.handler = function(event, context, callback)
{
   var alexa = Alexa.handler(event, context, callback);
   alexa.appId = APP_ID;
   alexa.registerHandlers(handlers);
   alexa.execute();
};

var handlers = 
{
    'LaunchRequest':function()
    {
        this.emit(':ask',"Welcome ot my quiz. Do you know which program is the most popular in our training center?",'Can you say that again?');
    },
    'AnswerIntent':function()
    {
        var course = this.event.request.intent.slots.Course.value;
        if(course == 'artificial intelligence engineer')
        {
            this.emit(':tell',"<say-as interpret-as='interjection'> bravo! great </say-as>");
        }
        else
        {
            this.emit(':tell','you guess that'+ course +'is not the most popular. it is AI engineer')
        }
    }, 
};