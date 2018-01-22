import 'babel-polyfill';
import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(8181);
