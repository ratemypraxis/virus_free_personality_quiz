const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use(cors({
  origin: 'http://localhost:8080',  // use localhost or update with ip of your frontend otherwise (make sure the port matches too!)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

import('node-fetch').then((fetch) => {
  const API_KEY = 'YOU_API_KEY'; // replace with an OpenAI API key of your own 

  app.post('/getCompletion', async (req, res) => {
    const { prompt } = req.body;
    console.log('Received request with prompt:', prompt);
    const url = 'https://api.openai.com/v1/completions';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt,
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      }),
    };

    try {
      const response = await fetch.default(url, options);
      const data = await response.json();
      res.json({ output: data.choices[0].text });
    } catch (error) {
    //  console.error(error);
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
