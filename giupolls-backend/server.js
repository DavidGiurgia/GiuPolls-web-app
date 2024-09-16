const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Permite comunicarea între frontend și backend
app.use(express.json()); // Parsează datele JSON

// Un endpoint de test
app.get('/', (req, res) => {
  res.send('Serverul rulează!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const polls = [];

// Crearea unui poll nou
app.post('/polls', (req, res) => {
  const poll = req.body;
  polls.push(poll);
  res.status(201).json(poll);
});

// Obținerea tuturor poll-urilor
app.get('/polls', (req, res) => {
  res.json(polls);
});

