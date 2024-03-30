# Virus-Free Personality Quiz
***a javascript quiz that gives you insight into your future with just a few simple questions ~ no risk!***

![screengrab gif showing hyperspecific popups appear on a webpage for a personality quiz](https://www.2nd.systems/images/virus.gif)

## How was it made?
- p5.js for front-end, mainly following [this template by Yining Shi](https://editor.p5js.org/yining/sketches/cnlmIOoL9)
  - *NOTE: it is not sustainable to have your API key on p5 web editor long-term as it is public and you risk your key being deactivated by OPENAI* 
- OPENAI API for text generation based on input
- nodejs for secret API handling
- http-server for client side hosting

## How can it be reproduced?
1. clone this repo
2. register for your own OPENAI API key at [this link](https://platform.openai.com/overview)
3. replace labeled instance of API KEY insertion in server.js
4. run npm install to get all the dependencies
5. run the server with node server.js
6. run the client-side by running http-server from the public directory
7. visit localhost:8080 to give it a try!
