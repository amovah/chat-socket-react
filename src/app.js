import 'babel-polyfill';
import express from 'express';
import socketIO from 'socket.io';
import { connect, applyMiddleware } from 'socket.io-manager';
import mongoose from 'mongoose';
import { join } from 'path';

global.rootRequire = name => require(join(__dirname, name));
global.shared = { key: 'kcY"e[Ez4}f?yO7' };

const sockets = require('./sockets');
const { init } = require('./middles');

/**
 * setting up db
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/chat-socket-react');

mongoose.connection.on('error', () => {
  process.exit(0);
});

mongoose.connection.on('disconnected', () => {
  process.exit(0);
});


const app = express();
const server = app.listen(8181);

const io = socketIO(server);

app.use(express.static(join(__dirname, 'static')));

app.use((req, res) => {
  res.sendFile(join(__dirname, 'views', 'index.html'));
});

connect(io, applyMiddleware([init], sockets));
