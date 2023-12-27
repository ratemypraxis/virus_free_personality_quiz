# Virus-Free Personality Quiz
***a javascript quiz that gives you insight into your future with just a few simple questions ~ no risk!***

## How was it made?
- p5.js for front-end 
- OPENAI API for text generation based on input
- nodejs for secret API handling
- http-server for client side hosting

## How can it be reproduced?
1. clone this repo
2. register for your own OPENAI API key - v1completions is what you want
3. replace labeled instance of API KEY insertion in server.js
4. run npm install to get all the dependencies
5. run the server with node server.js
6. run the client-side by running http-server from the public directory
7. visit localhost:8080 to give it a try!
