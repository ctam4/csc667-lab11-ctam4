const express = require('express');
const KafkaProducer = require('./KafkaProducer.js'); // helper class

const app = express();
const port = 3000;
const producer = new KafkaProducer('myTopic');

app.get('/', (req, res) => {
  // heavy process
  /*
  setTimeout(() => { // something that takes a really long time
    res.send('hello world');
  }, 5000); // number of ms delay
  */
  console.log('Pushing new item to queue');
  producer.send('Hello world');
  res.send('Item added to queue'); // no delay
});

producer.connect(() => {
  app.listen(port);
});
