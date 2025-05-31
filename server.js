const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// In-memory storage
const submittedUsers = [];

app.get('/', (req, res) => {
  res.render('index', { error: null });
});

app.post('/submit', (req, res) => {
  const { name, email, age } = req.body;

  // Server-side validation
  if (!name || !email || !age) {
    return res.render('index', { error: 'All fields are required.' });
  }

  if (parseInt(age) < 18) {
    return res.render('index', { error: 'You must be 18 or older.' });
  }

  const user = { name, email, age };
  submittedUsers.push(user);

  res.render('result', { user });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
