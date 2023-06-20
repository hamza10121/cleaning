const express = require('express');
const app = express();

app.get('/api/service/request', (req, res) => {
  const responseData = { message: 'Data fetched from the backend.' };
  res.status(200).json(responseData);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}`);
});
