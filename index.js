const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 4004;

app.use(express.static('./build'));

app.get('/*', (_req, res) => {
  res.sendFile(path.resolve('./build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening @ port => ${port}`);
});
