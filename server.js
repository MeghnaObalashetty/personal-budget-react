const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors');
const fs = require('fs');
app.use(cors());

let budget = null;
fs.readFile('budget.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }
    budget = JSON.parse(data);
    console.log('JSON data loaded:', budget);
});
app.get('/budget', (req, res) => {
    if (budget) {
        res.json(budget);
    } else {
        res.status(500).json({ error: 'Budget data not available' });
    }
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});