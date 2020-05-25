const { MongoClient } = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017';
const client = new MongoClient(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });

const state = {
  db: null,
};

exports.connect = (done) => {
  if (state.db) done();
  client.connect((err, db) => {
    if (err) done(err);
    state.db = db;
    done();
  });
};

exports.get = () => state.db;
