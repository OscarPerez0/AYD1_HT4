const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Endpoint for summing two numbers
app.post('/sum', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both num1 and num2 should be numbers' });
  }

  const sum = num1 + num2;
  return res.json({ result: sum });
});

app.post('/primo', (req, res) => {
  const { num } = req.body;
  
  if (typeof num !== 'number') {
    return res.status(400).json({ error: 'El dato no es de tipo numerico' });
  }

  if (num <= 1) {
    return res.json({esPrimo : false});
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return res.json({esPrimo : false});
    }
  }

  return res.json({esPrimo : true});
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 3000');
});





// Endpoint for summing two numbers
app.post('/rest', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both num1 and num2 should be numbers' });
  }

  const rest = num1 - num2;
  return res.json({ result: rest });
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 3000');
});
