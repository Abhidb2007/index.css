// Step 1: Install dependencies
// npm init -y
// npm install express

const express = require('express');
const app = express();

app.use(express.json()); // Middleware for JSON body parsing

// Step 2: Define a route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Step 3: Example POST request
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Normally: Check these in a database
  if (username === 'admin' && password === '1234') {
    res.send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

// Step 4: Start server
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
