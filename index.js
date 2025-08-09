
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello from Node.js + Express!');
});


app.get('/api', (req, res) => {
    res.json({ message: 'This is an API endpoint', status: 'success' });
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
