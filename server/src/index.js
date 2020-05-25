const express = require('express');
const bodyParser = require('body-parser');

const mongoUrl = 'mongodb://localhost:27017';
const { MongoClient } = require('mongodb');
const url = require('url');

const client = new MongoClient(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });
const { ObjectId } = require('mongodb');
const cors = require('cors');
const morgan = require('morgan');
const config = require('../config/config');

const app = express();
let db;

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.listen(process.env.PORT || config.port, () => {
//   console.log(`Server start on port ${config.port}...`);
// });

client.connect((err, data) => {
  if (err) console.log(err);
  db = data.db('api');
  app.listen(process.env.PORT || config.port, () => {
    console.log('Server started...');
  });
});

app.get('/posts', (req, res) => {
  db.collection('posts').find().toArray((err, docs) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(docs);
  });
});

app.get('/post', (req, res) => {
  const { id } = req.query;
  db.collection('posts').findOne({ _id: ObjectId(id) }, (err, doc) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(doc);
  });
});

app.post('/posts', (req, res) => {
  const post = { title: req.body.title, text: req.body.text };
  db.collection('posts').insertOne(post, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(post);
  });
});

app.put('/posts/:id', (req, res) => {
  db.collection('posts').updateOne(
    { _id: ObjectId(req.params.id) }, {
      $set: { title: req.body.title, text: req.body.text },
    }, {}, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      res.sendStatus(200);
    },
  );
});

app.delete('/posts/:id', (req, res) => {
  db.collection('posts').deleteOne(
    { _id: ObjectId(req.params.id) }, {}, (err) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      res.sendStatus(200);
    },
  );
});
