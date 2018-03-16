const Alexa = require('alexa-sdk');
const APP_ID = 'amzn1.ask.skill.ba7a2211-7ec4-4952-ad75-1ef60a0275fc';

exports.handler = function(event, context, callback)
{
   var alexa = Alexa.handler(event, context, callback);
   alexa.appId = APP_ID;
   alexa.registerHandlers(handlers);
   alexa.execute();
};

var handlers = 
{
    'hello':function()
    {
        this.emit(':tell','hi, do you miss me, love u');
    },
    'LaunchRequest':function()
    {
        this.emit(':tell',"I'm Rucy. Nice to see you");
    }
};