# codeworksChatApp

This is my application for consideration to be admitted to the Codeworks Software Immersive course.
It is a simulation of a text based chat bot. The user types a message to the bot and the bot responds.

The project consists of an html, css, and javascript file, plus a folder of assets including a jpeg and two svg files. 

The project has a number of features to simulate a real chat function. Each response from the bot begins by showing an ellipse, as if the bot is loading or typing, before its message is delivered after a short delay. When the message is delivered, it replaces the message bubble with the ellipse on the screen.

The first 11 responses are delivered in a prescribed order. After the 11th message, there are 20 messages that are delivered randomly via a random number generator.

Each message is sent and delivered with an accurate timestamp.
The portion of the screen containing the messages scrolls to the bottom after each message is sent and delivered.
DOM interaction is done using JQuery.

Some lines of code, marked by an asterisk comment in the javascript, were learned from this tutorial from WebStylePress:
https://www.youtube.com/watch?v=EvKoONpFagU&t=693s

Lines 170 & 171 of the javascript were found on Stack Overflow:
https://stackoverflow.com/questions/26672241/remove-class-after-click-outside-the-div




