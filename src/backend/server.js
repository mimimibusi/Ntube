const express = require('express');
const app = express();
const port = 3001; // 任意のポート番号

app.get('/', (req, res) => {
  res.send('Hello from Node.js Backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});