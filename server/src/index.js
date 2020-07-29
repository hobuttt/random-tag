const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose')
const clanRoutes = require('./routes/clans')
const mongoURL = process.env.MONGO_URL
const config = require('../config/config');

const app = express();
app.use(clanRoutes)

async function start () {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}...`)
    })
  } catch (err) {
    console.log(err)
  }
}

start()

// client.connect((err, data) => {
//   if (err) console.log(err);
//   db = data.db('api');
//   app.listen(process.env.PORT || config.port, () => {
//     console.log('Server started...');
//   });
// });

// app.get('/clans/list', (req, res) => {
//   (async () => {
//     try {
//       const response = await axios.get('/clans/list/', {params: {application_id: apiKey, search: req.query.search}});
//       res.send(response.data)
//     } catch (error) {
//       res.status(500).send({ message: err })
//     }
//   })()
  // axios.get('/clans/list/', {params: {application_id: apiKey, search: req.body.search}}).then(response => {
  //   res.send(response.data)
  // }).catch(err => {
  //   res.status(500).send({ message: err })
  // })
  // request(`${wotURL}&search=${req.query.search}`, (err, response, body) => {
  //   if (err) return res.status(500).send({ message: err })
  //
  //   return res.send(body)
  // })
// });

// app.get('/posts', (req, res) => {
//   db.collection('posts').find().toArray((err, docs) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     }
//     res.send(docs);
//   });
// });
//
// app.get('/post', (req, res) => {
//   const { id } = req.query;
//   db.collection('posts').findOne({ _id: ObjectId(id) }, (err, doc) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     }
//     res.send(doc);
//   });
// });
//
// app.post('/posts', (req, res) => {
//   const post = { title: req.body.title, text: req.body.text };
//   db.collection('posts').insertOne(post, (err) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     }
//     res.send(post);
//   });
// });
//
// app.put('/posts/:id', (req, res) => {
//   db.collection('posts').updateOne(
//     { _id: ObjectId(req.params.id) }, {
//       $set: { title: req.body.title, text: req.body.text },
//     }, {}, (err, result) => {
//       if (err) {
//         console.log(err);
//         res.sendStatus(500);
//       }
//       res.sendStatus(200);
//     },
//   );
// });
//
// app.delete('/posts/:id', (req, res) => {
//   db.collection('posts').deleteOne(
//     { _id: ObjectId(req.params.id) }, {}, (err) => {
//       if (err) {
//         console.log(err);
//         res.sendStatus(500);
//       }
//       res.sendStatus(200);
//     },
//   );
// });
