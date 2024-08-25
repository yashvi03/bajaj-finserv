const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET route
app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1
  });
});

// POST route
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  // Separate numbers and alphabets
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));

  // Find the highest lowercase alphabet
  const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
  const highestLowercaseAlphabet = lowercaseAlphabets.sort().slice(-1);

  // Response
  res.status(200).json({
    is_success: true,
    user_id: "your_name_ddmmyyyy",  // Replace with your actual name and DOB
    email: "your_email@example.com", // Replace with your actual email
    roll_number: "your_roll_number", // Replace with your actual roll number
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
