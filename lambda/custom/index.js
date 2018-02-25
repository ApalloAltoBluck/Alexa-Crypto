/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');
var coinTicker = require("coin-ticker")
//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Space Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'To ask for the price of a coin say the name of the coin. An example would be BTC or bitcoin';
const HELP_REPROMPT = 'To ask for the price of a coin say the name of the coin. An example would be BTC or bitcoin';
const STOP_MESSAGE = 'Goodbye!';



//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask','Welcome to crypto track, what coin would you like to track. If you need help just say, help.');
    },

    'BTCprice': function(){

        coinTicker('bitcoinaverage', 'BTC_USD')
        .then((tick) => {
           console.log(tick.ask);
           var BTCanswer = "The current asking price of bitcoin on " + tick.exchange + " is " + tick.ask + " dollars";
           this.emit(':tell', BTCanswer);
        })
    },

    'ETHprice': function(){

        coinTicker('bitcoinaverage', 'ETH_USD')
        .then((tick) => {
           console.log(tick.ask);
           var ETHanswer = "The current asking price of Ethereum on " + tick.exchange + " is " + tick.ask + " dollars";
           this.emit(':tell', ETHanswer);
        })

    },

    'XRPprice': function(){

        coinTicker('bitcoinaverage', 'XRP_USD')
        .then((tick) => {
           console.log(tick.ask);
           var XRPanswer = "The current asking price of ripple on " + tick.exchange + " is " + tick.ask + " dollars";
           this.emit(':tell', XRPanswer);
        })

    },

    'LTCprice': function(){

        coinTicker('bitcoinaverage', 'LTC_USD')
        .then((tick) => {
           console.log(tick.ask);
           var LTCanswer = "The current asking price of Litecoin on " + tick.exchange + " is " + tick.ask + " dollars";
           this.emit(':tell', LTCanswer);
        })

    },
    
    'BCHprice': function(){

        coinTicker('bitcoinaverage', 'BCH_USD')
        .then((tick) => {
           console.log(tick.ask);
           var BCHanswer = "The current asking price of Bitcoin Cash on " + tick.exchange + " is " + tickBCH.ask + " dollars";
           this.emit(':tell', BCHanswer);
        })

    },

    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },

    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },

    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },

};
