const express = require('express');
const app = express();
const port = 3000;
const host = process.env.HOSTNAME


app.get('/', (req, res) => {
  res.send(`Hello Docker: ${host}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

