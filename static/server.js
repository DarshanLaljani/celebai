const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route to handle chatbot requests
app.post('/chatbot', (req, res) => {
  // Handle user input and generate chatbot response
  // Replace this with your actual chatbot logic

  const userInput = req.body.userInput;
  const chatbotResponse = `Chatbot says: Hello, you said "${userInput}"`;

  res.send(chatbotResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
